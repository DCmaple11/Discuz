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

namespace App\Api\Controller\Notification;

use App\Api\Serializer\NotificationTplSerializer;
use App\Models\NotificationTpl;
use Discuz\Api\Controller\AbstractListController;
use Discuz\Auth\AssertPermissionTrait;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListNotificationTplController extends AbstractListController
{
    use AssertPermissionTrait;

    public $serializer = NotificationTplSerializer::class;

    protected $tpl;

    public function __construct(NotificationTpl $tpl)
    {
        $this->tpl = $tpl;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return mixed
     * @throws \Discuz\Auth\Exception\PermissionDeniedException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $this->assertPermission($actor->isAdmin());

        $type = Arr::get($request->getQueryParams(), 'type', 0);

        $tpl = $this->tpl->where('type', $type)->get();

        return $tpl;
    }
}
