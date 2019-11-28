<?php


namespace App\Api\Serializer;


use Discuz\Api\Serializer\AbstractSerializer;

class UserWechatSerializer extends AbstractSerializer
{

    protected $type = 'wechats';

    /**
     * Get the default set of serialized attributes for a model.
     *
     * @param object|array $model
     * @return array
     */
    protected function getDefaultAttributes($model)
    {
        return [
            'openid' => $model->openid
        ];
    }

    public function getId($model)
    {
        return $model->openid; // TODO: Change the autogenerated stub
    }
}