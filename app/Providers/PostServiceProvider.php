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

namespace App\Providers;

use App\Listeners\Post\PostAttachment;
use App\Listeners\Post\PostListener;
use App\Policies\PostPolicy;
use Discuz\Foundation\AbstractServiceProvider;

class PostServiceProvider extends AbstractServiceProvider
{
    /**
     * {@inheritdoc}
     */
    public function register()
    {
    }

    /**
     * @return void
     */
    public function boot()
    {
        $events = $this->app->make('events');

        $events->subscribe(PostListener::class);
        $events->subscribe(PostPolicy::class);
        $events->subscribe(PostAttachment::class);
    }
}
