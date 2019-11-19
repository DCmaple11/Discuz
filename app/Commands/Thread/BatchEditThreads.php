<?php

/**
 *      Discuz & Tencent Cloud
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: BatchEditThreads.php xxx 2019-10-21 14:22:00 LiuDongdong $
 */

namespace App\Commands\Thread;

use App\Models\User;
use App\Repositories\ThreadRepository;
use Carbon\Carbon;
use Illuminate\Support\Arr;

class BatchEditThreads
{
    /**
     * The ID array of the threads to update.
     *
     * @var array
     */
    public $ids;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The attributes to update on the threads.
     *
     * @var array
     */
    public $data;

    /**
     * @param array $ids
     * @param User $actor
     * @param array $data
     */
    public function __construct(array $ids, User $actor, array $data)
    {
        $this->ids = $ids;
        $this->actor = $actor;
        $this->data = $data;
    }

    /**
     * @param ThreadRepository $threads
     * @return array
     */
    public function handle(ThreadRepository $threads)
    {
        $attributes = Arr::get($this->data, 'attributes', []);
        $result = ['data' => [], 'meta' => []];

        foreach ($this->ids as $id) {
            $thread = $threads->query()->whereVisibleTo($this->actor)->find($id);

            if ($thread) {
                $thread->timestamps = false;
            } else {
                $result['meta'][] = ['id' => $id, 'message' => 'model_not_found'];
                continue;
            }

            if (isset($attributes['isApproved'])) {
                if ($this->actor->can('approve', $thread)) {
                    $thread->is_approved = $attributes['isApproved'];
                } else {
                    $result['meta'][] = ['id' => $id, 'message' => 'permission_denied'];
                    continue;
                }
            }

            if (isset($attributes['isSticky'])) {
                if ($this->actor->can('sticky', $thread)) {
                    $thread->is_sticky = $attributes['isSticky'];
                } else {
                    $result['meta'][] = ['id' => $id, 'message' => 'permission_denied'];
                    continue;
                }
            }

            if (isset($attributes['isEssence'])) {
                if ($this->actor->can('essence', $thread)) {
                    $thread->is_essence = $attributes['isEssence'];
                } else {
                    $result['meta'][] = ['id' => $id, 'message' => 'permission_denied'];
                    continue;
                }
            }

            if (isset($attributes['isDelete'])) {
                if ($this->actor->can('delete', $thread)) {
                    if ($attributes['isDelete']) {
                        $thread->deleted_at = Carbon::now();
                        $thread->deleted_user_id = $this->actor->id;
                    } else {
                        $thread->deleted_at = null;
                        $thread->deleted_user_id = null;
                    }
                } else {
                    $result['meta'][] = ['id' => $id, 'message' => 'permission_denied'];
                    continue;
                }
            }

            $thread->save();

            $result['data'][] = $thread;
        }

        return $result;
    }
}