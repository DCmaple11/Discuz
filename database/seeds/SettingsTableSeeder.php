<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $settings = new Setting();
        $settings->truncate();
        $settings->insert([
            [
                'key' => 'site_close',          // 站点开关：0 开启站点，1 关闭站点
                'value' => '0',                 // 默认开启
                'tag' => 'default',
            ],
            [
                'key' => 'site_mode',           // 站点模式：public 公开，pay 付费
                'value' => 'public',            // 默认公开
                'tag' => 'default',
            ],
            [
                'key' => 'site_author',         // 站长用户ID 1 管理员
                'value' => '1',                 // 默认用户1
                'tag' => 'default',
            ],
            [
                'key' => 'register_close',      // 注册开关：0 禁止，1 允许
                'value' => '1',                 // 默认允许
                'tag' => 'default',
            ],
            [
                'key' => 'register_validate',   // 注册审核：0关闭，1开启
                'value' => '0',                 // 默认关闭
                'tag' => 'default',
            ],
            [
                'key' => 'qcloud_sms',          // 腾讯云短信开关：0 关闭，1 开启
                'value' => '0',                 // 默认关闭
                'tag' => 'qcloud',
            ],
            [
                'key' => 'qcloud_vod',          // 腾讯云点播开关：0 关闭，1 开启
                'value' => '0',                 // 默认关闭
                'tag' => 'qcloud',
            ],
            [
                'key' => 'support_img_ext',     // 默认支持的图片扩展名
                'value' => 'png,gif,jpg,jpeg,heic',
                'tag' => 'default',
            ],
            [
                'key' => 'support_file_ext',    // 默认支持的附件扩展名
                'value' => 'doc,docx,pdf,zip',
                'tag' => 'default',
            ],
            [
                'key' => 'support_max_size',    // 默认支持附件最大大小 MB单位
                'value' => 5,
                'tag' => 'default',
            ],
            [
                'key' => 'miniprogram_video',    // 小程序视频开关：0 关闭，1 开启
                'value' => 1,                    // 默认开启
                'tag' => 'wx_miniprogram',
            ]
        ]);
    }
}
