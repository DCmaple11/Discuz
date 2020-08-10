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

namespace App\Validators;

use Discuz\Foundation\AbstractValidator;

class GroupValidator extends AbstractValidator
{
    protected function getRules()
    {
        return [
            'name' => ['required'],
            'fee' => 'filled|numeric|min:0',
            'days' => 'sometimes|min:0|int',
            'scale' => 'numeric|min:0|max:10'
        ];
    }

    protected function getMessages()
    {
        return [
            'name.required' => '名称不能为空'
        ];
    }
}
