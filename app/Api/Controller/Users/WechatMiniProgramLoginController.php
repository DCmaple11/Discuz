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

namespace App\Api\Controller\Users;

use App\Api\Serializer\TokenSerializer;
use App\Commands\Users\GenJwtToken;
use App\Commands\Users\AutoRegisterUser;
use App\Events\Users\Logind;
use App\Models\UserWechat;
use App\Settings\SettingsRepository;
use Discuz\Api\Controller\AbstractResourceController;
use Discuz\Auth\AssertPermissionTrait;
use Discuz\Auth\Exception\PermissionDeniedException;
use Discuz\Socialite\Exception\SocialiteException;
use Discuz\Wechat\EasyWechatTrait;
use EasyWeChat\Kernel\Exceptions\DecryptException;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Contracts\Cache\Repository;
use Illuminate\Contracts\Events\Dispatcher as Events;
use Illuminate\Contracts\Validation\Factory as ValidationFactory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class WechatMiniProgramLoginController extends AbstractResourceController
{
    use AssertPermissionTrait;
    use EasyWechatTrait;

    public $serializer = TokenSerializer::class;

    protected $bus;

    protected $cache;

    protected $validation;

    protected $events;

    protected $settings;

    public function __construct(Dispatcher $bus, Repository $cache, ValidationFactory $validation, Events $events, SettingsRepository $settings)
    {
        $this->bus = $bus;
        $this->cache = $cache;
        $this->validation = $validation;
        $this->events = $events;
        $this->settings = $settings;
    }

    /**
     * @inheritDoc
     * @throws SocialiteException
     * @throws InvalidConfigException
     * @throws DecryptException
     * @throws PermissionDeniedException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);
        $js_code = Arr::get($attributes, 'js_code');
        $iv = Arr::get($attributes, 'iv');
        $encryptedData =Arr::get($attributes, 'encryptedData');
        $this->validation->make(
            $attributes,
            ['js_code' => 'required','iv' => 'required','encryptedData' => 'required']
        )->validate();

        $app = $this->miniProgram();
        //获取小程序登陆session key
        $authSession = $app->auth->session($js_code);
        if (isset($authSession['errcode']) && $authSession['errcode'] != 0) {
            throw new SocialiteException($authSession['errmsg'], $authSession['errcode']);
        }
        $decryptedData = $app->encryptor->decryptData(Arr::get($authSession, 'session_key'), $iv, $encryptedData);
        $unionid = Arr::get($decryptedData, 'unionId') ?: Arr::get($authSession, 'unionid', '');
        $openid  =  Arr::get($decryptedData, 'openId') ?: Arr::get($authSession, 'openid');

        //获取小程序用户信息
        /** @var UserWechat $wechatUser */
        $wechatUser = UserWechat::when($unionid, function ($query, $unionid) {
            return $query->where('unionid', $unionid);
        })->orWhere('min_openid', $openid)->first();

        if (!$wechatUser) {
            $wechatUser = UserWechat::build([]);
        }

        //解密获取数据，更新/插入wechatUser
        $wechatUser->unionid = $unionid;
        $wechatUser->min_openid = $openid;
        $wechatUser->nickname = $decryptedData['nickName'];
        $wechatUser->city = $decryptedData['city'];
        $wechatUser->province = $decryptedData['province'];
        $wechatUser->country = $decryptedData['country'];
        $wechatUser->sex = $decryptedData['gender'];
        $wechatUser->headimgurl = $decryptedData['avatarUrl'];


        if ($wechatUser->user_id) {
            //已绑定的用户登陆
            $user = $wechatUser->user;

            //用户被删除
            if (!$user) {
                throw new \Exception('bind_error');
            }
        } else {
            //未绑定的用户注册
            $this->assertPermission((bool)$this->settings->get('register_close'));

            //注册邀请码
            $data['code'] = Arr::get($attributes, 'code');
            $data['username'] = Str::of($wechatUser->nickname)->substr(0, 15);
            $data['register_reason'] = '微信小程序注册';
            $user = $this->bus->dispatch(
                new AutoRegisterUser($request->getAttribute('actor'), $data)
            );
            $wechatUser->user_id = $user->id;
        }
        $wechatUser->save();

        //创建 token
        $params = [
            'username' => $user->username,
            'password' => ''
        ];

        $response = $this->bus->dispatch(
            new GenJwtToken($params)
        );

        if ($response->getStatusCode() === 200) {
            $this->events->dispatch(new Logind($user));
        }

        return json_decode($response->getBody());
    }
}
