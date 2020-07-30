<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Commands\Order;

use App\Exceptions\OrderException;
use App\Models\Order;
use App\Models\PayNotify;
use App\Models\Thread;
use App\Models\User;
use App\Models\Group;
use App\Models\Post;
use App\Settings\SettingsRepository;
use Discuz\Auth\AssertPermissionTrait;
use App\Events\Group\PaidGroup;
use App\BlockEditor\Formater\PostFormater;
use Exception;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Validation\Factory as Validator;
use Illuminate\Validation\ValidationException;

class CreateOrder
{
    use AssertPermissionTrait;

    /**
     * @var User
     */
    public $actor;

    /**
     * @var Collection
     */
    public $data;

    /**
     * @param User $actor 执行操作的用户.
     * @param Collection $data 请求的数据.
     */
    public function __construct($actor, Collection $data)
    {
        $this->actor = $actor;
        $this->data  = $data;
    }

    /**
     * 执行命令
     * @param Validator $validator
     * @param ConnectionInterface $db
     * @param SettingsRepository $setting
     * @return order
     * @throws OrderException
     * @throws ValidationException
     * @throws \Discuz\Auth\Exception\PermissionDeniedException
     */
    public function handle(Validator $validator, ConnectionInterface $db, SettingsRepository $setting, Dispatcher $events)
    {
        $this->events = $events;

        $this->assertCan($this->actor, 'order.create');

        $this->data = collect(Arr::get($this->data, 'data.attributes'));

        $validator_info = $validator->make($this->data->toArray(), [
            'group_id'      => 'filled|int',
            'post_id'       => 'filled|int',
            'type'          => 'required|int',
            'thread_id'     => 'required_if:type,' . Order::ORDER_TYPE_REWARD . ',' . Order::ORDER_TYPE_THREAD . '|int',
            'amount'        => 'required_if:type,' . Order::ORDER_TYPE_REWARD . '|numeric|min:0.01',
        ]);

        if ($validator_info->fails()) {
            throw new ValidationException($validator_info);
        }

        $orderType = (int) $this->data->get('type');
        $order_zero_amout_allowed = false;//是否允许金额为0
        switch ($orderType) {
            // 注册订单
            case Order::ORDER_TYPE_REGISTER:
                $payeeId = Order::REGISTER_PAYEE_ID;
                $amount = sprintf('%.2f', (float) $setting->get('site_price'));
                break;
            // 主题打赏订单
            case Order::ORDER_TYPE_REWARD:
                $thread = Thread::query()
                    ->where('id', $this->data->get('thread_id'))
                    ->where('price', 0)                             // 免费主题才可以打赏
                    ->where('is_approved', Thread::APPROVED)
                    ->whereNull('deleted_at')
                    ->first();

                if ($thread) {
                    $payeeId = $thread->user_id;
                    $amount = sprintf('%.2f', (float) $this->data->get('amount'));
                } else {
                    throw new OrderException('order_post_not_found');
                }
                break;
            // 付费主题订单
            case Order::ORDER_TYPE_THREAD:
                // 根据主题 id 查询非自己的付费主题
                $thread = Thread::query()
                    ->where('id', $this->data->get('thread_id'))
                    ->where('user_id', '<>', $this->actor->id)
                    ->where('price', '>', 0)
                    ->where('is_approved', Thread::APPROVED)
                    ->whereNull('deleted_at')
                    ->first();

                // 根据主题 id 查询是否已付过费
                $order = Order::query()
                    ->where('thread_id', $this->data->get('thread_id'))
                    ->where('user_id', $this->actor->id)
                    ->where('status', Order::ORDER_STATUS_PAID)
                    ->where('type', Order::ORDER_TYPE_THREAD)
                    ->exists();

                // 主题存在且未付过费
                if ($thread && ! $order) {
                    $payeeId = $thread->user_id;
                    $amount = $thread->price;
                } else {
                    throw new OrderException('order_post_not_found');
                }
                break;
            // 付费用户组
            case Order::ORDER_TYPE_GROUP:
                $order_zero_amout_allowed = true;
                $group_id = $this->data->get('group_id');
                if (in_array($group_id, Group::PRESET_GROUPS)) {
                    throw new OrderException('order_group_forbidden');
                }
                $group = Group::find($group_id);
                if (
                    isset($group->days)
                    && $group->days > 0
                    && $group->is_paid == Group::IS_PAID
                    && $group->fee > 0
                ) {
                    $payeeId = Order::REGISTER_PAYEE_ID;
                    $amount = $group->fee;
                } else {
                    throw new OrderException('order_group_error');
                }
                break;
            // 付费块
            case Order::ORDER_TYPE_BLOCK:
                $post_id     = $this->data->get('post_id');
                $block_payid = $this->data->get('block_payid');
                $post        = Post::findOrfail($post_id);
                $content     = $post->getAttribute('content');
                $content     = json_decode($content, true);
                $payids      = [];
                $pay_info    = [];
                if (isset($content['blocks'])) {
                    $pay_info = PostFormater::getPayIds($content['blocks']);
                    $payids = array_keys($pay_info);
                }

                if (in_array($block_payid, $payids)) {
                    $amount  = $pay_info[$block_payid]['price'];
                    $payeeId = $post->user_id;
                } else {
                    throw new OrderException('order_block_not_found');
                }
                break;
            default:
                throw new OrderException('order_type_error');
                break;
        }
        // 订单金额需检查
        if (($amount == 0 && !$order_zero_amout_allowed) || $amount < 0) {
            throw new OrderException('order_amount_error');
        }

        // 是否匿名
        $is_anonymous = (bool) $this->data->get('is_anonymous');

        // 支付编号
        $payment_sn = $this->getPaymentSn();

        // 支付通知
        $pay_notify             = new PayNotify();
        $pay_notify->payment_sn = $payment_sn;
        $pay_notify->user_id    = $this->actor->id;

        // 订单
        $order                  = new Order();
        $order->payment_sn      = $payment_sn;
        $order->order_sn        = $this->getOrderSn();
        $order->amount          = $amount;
        $order->user_id         = $this->actor->id;
        $order->type            = $orderType;
        $order->post_id         = isset($post) ? $post->id : null;
        $order->block_payid     = isset($block_payid) ? $block_payid : null;
        $order->thread_id       = isset($thread) ? $thread->id : null;
        $order->group_id        = isset($group_id) ? $group_id : null;
        $order->payee_id        = $payeeId;
        $order->is_anonymous    = $is_anonymous;
        $order->status          = 0; // 待支付

        // 开始事务
        $db->beginTransaction();
        try {
            if ($amount == 0 && $order_zero_amout_allowed) {
                //用户组0付费
                $order->status = 1;
            }
            $pay_notify->save();    // 保存通知数据
            $order->save();         // 保存订单

            if ($orderType == Order::ORDER_TYPE_GROUP && $order->status == 1) {
                $this->events->dispatch(
                    new PaidGroup($order->group_id, $this->actor, $order)
                );
            }
            $db->commit();          // 提交事务
            return $order;
        } catch (Exception $e) {
            $db->rollback();        // 回滚事务
            throw new OrderException('order_create_failure');
        }
    }

    /**
     * 生成支付编号
     * @return string  18位字符串
     */
    public function getPaymentSn()
    {
        return date('Ymd')
        . str_pad(strval(mt_rand(1, 99)), 2, '0', STR_PAD_LEFT)
        . substr(implode(null, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 8);
    }

    /**
     * 生成订单编号
     * @return string 22位字符串
     */
    public function getOrderSn()
    {
        return date('YmdHis', time()) . substr(implode(null, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 8);
    }
}
