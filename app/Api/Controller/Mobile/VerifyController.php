<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

namespace App\Api\Controller\Mobile;

use App\Api\Serializer\VerifyMobileSerializer;
use App\Commands\Sms\VerifyMobile;
use App\Exceptions\SmsCodeVerifyException;
use App\Models\MobileCode;
use App\Repositories\MobileCodeRepository;
use Discuz\Api\Controller\AbstractResourceController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Contracts\Validation\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class VerifyController extends AbstractResourceController
{
    public $serializer = VerifyMobileSerializer::class;

    protected $mobileCodeRepository;

    protected $bus;

    protected $validation;

    public function __construct(MobileCodeRepository $mobileCodeRepository, Dispatcher $bus, Factory $validation)
    {
        $this->mobileCodeRepository = $mobileCodeRepository;
        $this->bus = $bus;
        $this->validation = $validation;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return mixed
     * @throws SmsCodeVerifyException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $data = Arr::get($request->getParsedBody(), 'data.attributes', []);

        $type = Arr::get($data, 'type');

        if ($type === 'verify' || $type === 'reset_pay_pwd') {
            $data['mobile'] = $actor->getRawOriginal('mobile');
        }

        $mobile = Arr::get($data, 'mobile');
        $code = Arr::get($data, 'code');

        $data['sms_type'] = $type;
        $data['sms_code'] = $code;

        $this->validation->make($data, [
            'mobile' => 'required',
            'sms_type' => 'required',
            'sms_code' => 'required'
        ])->validate();

        $mobileCode = $this->mobileCodeRepository->getSmsCode($mobile, $type);

        if (!$mobileCode || $mobileCode->code !== $code || $mobileCode->expired_at < Carbon::now()) {
            throw new SmsCodeVerifyException();
        }

        $mobileCode->changeState(MobileCode::USED_STATE);
        $mobileCode->save();

        //各种类型验证通过后，返回相关数据
        return $this->bus->dispatch(new VerifyMobile($this, $mobileCode, $actor, $data));
    }
}
