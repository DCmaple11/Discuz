<?php

/**
 *      Discuz & Tencent Cloud
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: CategorySerializer.php xxx 2019-11-29 15:28:00 LiuDongdong $
 */

namespace App\Api\Serializer;

use Discuz\Api\Serializer\AbstractSerializer;

class CategorySerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'categories';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($model)
    {
        return [
            'name'              => $model->name,
            'description'       => $model->description,
            'icon'              => $model->icon,
            'sort'              => $model->sort,
            'property'          => $model->property,
            'thread_count'      => (int) $model->thread_count,
            'ip'                => $model->ip,
            'created_at'        => $this->formatDate($model->created_at),
            'updated_at'        => $this->formatDate($model->updated_at),
        ];
    }
}