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
use App\Models\SessionToken;
use Discuz\Api\Controller\AbstractResourceController;
use Discuz\Auth\AssertPermissionTrait;
use Exception;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class WechatQrcodeLoginController extends AbstractResourceController
{
    use AssertPermissionTrait;

    public $serializer = TokenSerializer::class;

    public $optionalInclude = [];

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var BusDispatcher
     */
    protected $bus;

    /**
     * @param UrlGenerator $url
     * @param BusDispatcher $bus
     */
    public function __construct(UrlGenerator $url, BusDispatcher $bus)
    {
        $this->url = $url;
        $this->bus = $bus;
    }

    /**
     * {@inheritdoc}
     * @throws Exception
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        // check
        $actor = $request->getAttribute('actor');
        $this->assertRegistered($actor);

        // get session key
        $sessionToken = Arr::get($request->getQueryParams(), 'session_token');
        $token = SessionToken::get($sessionToken);
        if (empty($token)) {
            throw new Exception(trans('user.pc_qrcode_time_out'));
        }

        $response = $this->bus->dispatch(
            new GenJwtToken(['username' => $actor->username])
        );

        $accessToken = json_decode($response->getBody());

        if ($response->getStatusCode() === 200) {
            // build
            $token->payload = $accessToken;
            $token->save();
            $accessToken->pc_login = true;
        } else {
            throw new Exception(trans('user.pc_qrcode_time_fail'));
        }

        return $accessToken;
    }
}
