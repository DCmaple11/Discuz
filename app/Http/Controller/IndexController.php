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

namespace App\Http\Controller;

use Discuz\Common\Utils;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\View\Factory;
use Discuz\Http\DiscuzResponseFactory;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Discuz\Web\Controller\AbstractWebController;

class IndexController extends AbstractWebController
{

    public function render(ServerRequestInterface $request, Factory $view) {
        return $view->make('app');
    }

    // /**
    //  * {@inheritdoc}
    //  */
    // public function handle(ServerRequestInterface $request): ResponseInterface
    // {
    //     $route = $request->getUri()->getPath();

    //     if (Str::startsWith($route, '/admin')) {
    //         $file = 'admin.html';
    //     } else {
    //         $isMobile = Utils::isMobile();
    //         $file = $isMobile ? 'index.html' : 'pc.html';

    //         if (Arr::has($request->getQueryParams(), 'from')) {
    //             $file = 'index.html';
    //         }
    //     }

    //     return DiscuzResponseFactory::FileResponse(
    //         public_path($file)
    //     );
    // }
}
