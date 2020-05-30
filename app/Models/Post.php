<?php

/**
 * Discuz & Tencent Cloud
 * This is NOT a freeware, use is subject to license terms
 */

namespace App\Models;

use App\Events\Post\Hidden;
use App\Events\Post\Restored;
use App\Events\Post\Revised;
use App\Formatter\Formatter;
use App\Formatter\MarkdownFormatter;
use Carbon\Carbon;
use Discuz\Foundation\EventGeneratorTrait;
use Discuz\Database\ScopeVisibilityTrait;
use Discuz\SpecialChar\SpecialCharServer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property int $user_id
 * @property int $thread_id
 * @property int $reply_post_id
 * @property int $reply_user_id
 * @property string $summary
 * @property string $content
 * @property string $ip
 * @property int $reply_count
 * @property int $like_count
 * @property float $longitude
 * @property float $latitude
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 * @property int $deleted_user_id
 * @property bool $is_first
 * @property bool $is_comment
 * @property bool $is_approved
 * @property Attachment $images
 * @property Thread $thread
 * @property User $user
 * @property User $replyUser
 * @property User $deletedUser
 * @property PostMod $stopWords
 * @property Post replyPost
 * @property string parsedContent
 * @package App\Models
 * @method static where($column, $fields)
 */
class Post extends Model
{
    use EventGeneratorTrait;
    use ScopeVisibilityTrait;

    /**
     * 摘要长度
     */
    const SUMMARY_LENGTH = 100;

    /**
     * 摘要结尾
     */
    const SUMMARY_END_WITH = '...';

    /**
     * 通知内容展示长度(字)
     */
    const NOTICE_LENGTH = 80;

    const UNAPPROVED = 0;

    const APPROVED = 1;

    const IGNORED = 2;

    /**
     * {@inheritdoc}
     */
    protected $casts = [
        'reply_count' => 'integer',
        'like_count' => 'integer',
        'is_first' => 'boolean',
        'is_comment' => 'boolean',
    ];

    /**
     * {@inheritdoc}
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    /**
     * The user for which the state relationship should be loaded.
     *
     * @var User
     */
    protected static $stateUser;

    /**
     * The text formatter instance.
     *
     * @var Formatter
     */
    protected static $formatter;

    /**
     * The markdown text formatter instance.
     *
     * @var MarkdownFormatter
     */
    protected static $markdownFormatter;

    /**
     * 帖子摘要
     *
     * @return string
     */
    public function getSummaryAttribute()
    {
        $content = Str::of($this->content ?: '');

        if ($content->length() > self::SUMMARY_LENGTH) {
            $content = static::$formatter->parse(
                $content->substr(0, self::SUMMARY_LENGTH)->finish(self::SUMMARY_END_WITH)
            );
            $content = static::$formatter->render($content);
        } else {
            $content = $this->formatContent();
        }

        return str_replace('<br>', '', $content);
    }

    /**
     * Unparse the parsed content.
     *
     * @param string $value
     * @return string
     */
    public function getContentAttribute($value)
    {
        if ($this->is_first && $this->thread->type == 1) {
            return static::$markdownFormatter->unparse($value);
        } else {
            return static::$formatter->unparse($value);
        }
    }

    /**
     * Get the parsed/raw content.
     *
     * @return string
     */
    public function getParsedContentAttribute()
    {
        return $this->attributes['content'];
    }

    /**
     * Parse the content before it is saved to the database.
     *
     * @param string $value
     */
    public function setContentAttribute($value)
    {
        if ($this->is_first && ($this->thread->type == 1)) {
            $this->attributes['content'] = strlen($value) ? static::$markdownFormatter->parse($value, $this) : null;
        } else {
            $this->attributes['content'] = strlen($value) ? static::$formatter->parse($value, $this) : null;
        }
    }

    /**
     * Set the parsed/raw content.
     *
     * @param string $value
     */
    public function setParsedContentAttribute($value)
    {
        $this->attributes['content'] = $value;
    }

    /**
     * Get the content rendered as HTML.
     *
     * @return string
     */
    public function formatContent()
    {
        $content = $this->attributes['content'] ?: '';

        if ($this->is_first && ($this->thread->type == 1)) {
            $content = $content ? static::$markdownFormatter->render($content) : '';
        } else {
            $content = $content ? static::$formatter->render($content) : '';
        }

        return $content;
    }

    /**
     * 获取 Content & firstContent
     *
     * @param int $substr
     * @return array
     */
    public function getSummaryContent($substr = 0)
    {
        $special = app()->make(SpecialCharServer::class);

        $build = [
            'content' => '',
            'first_content' => '',
        ];

        /**
         * 判断是否是楼中楼的回复
         */
        if ($this->reply_post_id) {
            $this->content = $substr ? Str::of($this->content)->substr(0, $substr) : $this->content;
            $content = $this->formatContent();
        } else {
            /**
             * 判断长文点赞通知内容为标题
             */
            if ($this->thread->type == 1) {
                $content = $this->thread->getContentByType(self::NOTICE_LENGTH);
            } else {
                // 引用回复去除引用部分
                $this->filterPostContent();

                $this->content = $substr ? Str::of($this->content)->substr(0, $substr) : $this->content;
                $content = $this->formatContent();

                // 如果是首贴 firstContent === content 内容一样
                if ($this->is_first) {
                    $firstContent = $content;
                } else {
                    $firstContent = $this->thread->getContentByType(self::NOTICE_LENGTH);
                }
            }
        }

        $build['content'] = $content;
        $build['first_content'] = $firstContent ?? $special->purify($this->thread->title);

        return $build;
    }

    /**
     * 引用回复去除引用部分
     *
     * @param int $substr
     */
    public function filterPostContent($substr = 0)
    {
        // 引用回复去除引用部分
        $pattern = '/<blockquote class="quoteCon">.*<\/blockquote>/';
        $this->content = preg_replace($pattern, '', $this->content);

        if ($substr) {
            $this->content = Str::of($this->content)->substr(0, $substr);
        }
    }

    /**
     * Create a new instance in reply to a thread.
     *
     * @param int $threadId
     * @param string $content
     * @param int $userId
     * @param string $ip
     * @param int $replyPostId
     * @param int $replyUserId
     * @param int $isFirst
     * @param int $isComment
     * @param float $latitude
     * @param float $longitude
     * @return static
     */
    public static function reply($threadId, $content, $userId, $ip, $replyPostId, $replyUserId, $isFirst, $isComment, $latitude, $longitude)
    {
        $post = new static;

        $post->created_at = Carbon::now();
        $post->thread_id = $threadId;
        $post->user_id = $userId;
        $post->ip = $ip;
        $post->reply_post_id = $replyPostId;
        $post->reply_user_id = $replyUserId;
        $post->is_first = $isFirst;
        $post->is_comment = $isComment;
        $post->latitude = $latitude;
        $post->longitude = $longitude;

        // Set content last, as the parsing may rely on other post attributes.
        $post->content = $content;

        return $post;
    }

    /**
     * Revise the post's content.
     *
     * @param string $content
     * @param User $actor
     * @return $this
     */
    public function revise($content, User $actor)
    {
        if ($this->content !== $content) {
            $this->content = $content;

            $this->raise(new Revised($this, $actor));
        }

        return $this;
    }

    /**
     * Hide the post.
     *
     * @param User $actor
     * @param array $options
     * @return $this
     */
    public function hide(User $actor, $options = [])
    {
        if (!$this->deleted_at) {
            $this->deleted_at = Carbon::now();
            $this->deleted_user_id = $actor->id;

            $this->raise(new Hidden($this, $actor, $options));
        }

        return $this;
    }

    /**
     * Restore the post.
     *
     * @param User $actor
     * @param array $options
     * @return $this
     */
    public function restore(User $actor, $options = [])
    {
        if ($this->deleted_at !== null) {
            $this->deleted_at = null;
            $this->deleted_user_id = null;

            $this->raise(new Restored($this, $actor, $options));
        }

        return $this;
    }

    /**
     * Refresh the thread's post count.
     *
     * @return $this
     */
    public function refreshLikeCount()
    {
        $this->like_count = $this->likedUsers()->count();

        return $this;
    }

    /**
     * Refresh the post's reply count.
     *
     * @return $this
     */
    public function refreshReplyCount()
    {
        $this->reply_count = $this->where('reply_post_id', $this->id)
            ->where('is_approved', Thread::APPROVED)
            ->whereNull('deleted_at')
            ->count();

        return $this;
    }

    /**
     * Define the relationship with the post's thread.
     *
     * @return BelongsTo
     */
    public function thread()
    {
        return $this->belongsTo(Thread::class);
    }

    /**
     * Define the relationship with the post's author.
     *
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Define the relationship with the post's reply user.
     *
     * @return BelongsTo
     */
    public function replyUser()
    {
        return $this->belongsTo(User::class, 'reply_user_id');
    }

    /**
     * Define the relationship with the post's content post.
     *
     * @return BelongsTo
     */
    public function replyPost()
    {
        return $this->belongsTo(Post::class, 'reply_post_id');
    }

    /**
     * Define the relationship with the user who hid the post.
     *
     * @return BelongsTo
     */
    public function deletedUser()
    {
        return $this->belongsTo(User::class, 'deleted_user_id');
    }

    /**
     * Define the relationship with the thread's operation Log.
     */
    public function logs()
    {
        return $this->morphMany(UserActionLogs::class, 'log_able');
    }

    /**
     * Define the relationship with the post's liked users.
     *
     * @return BelongsToMany
     */
    public function likedUsers()
    {
        return $this->belongsToMany(User::class)
            ->orderBy('post_user.created_at', 'desc')
            ->withPivot('created_at');
    }

    /**
     * Define the relationship with the post's stop words.
     *
     * @return HasOne
     */
    public function stopWords()
    {
        return $this->hasOne(PostMod::class);
    }

    /**
     * Define the relationship with the post's attachments.
     *
     * @return HasMany
     */
    public function images()
    {
        return $this->hasMany(Attachment::class)->where('is_gallery', true)->orderBy('order');
    }

    /**
     * Define the relationship with the post's attachments.
     *
     * @return HasMany
     */
    public function attachments()
    {
        return $this->hasMany(Attachment::class)->where('is_gallery', false)->orderBy('order');
    }

    /**
     * Define the relationship with the post's like state for a particular user.
     *
     * @param User|null $user
     * @return HasOne
     */
    public function likeState(User $user = null)
    {
        $user = $user ?: static::$stateUser;

        return $this->hasOne(PostUser::class)->where('user_id', $user ? $user->id : null);
    }

    public function mentionUsers()
    {
        return $this->belongsToMany(User::class, 'post_mentions_user', 'post_id', 'mentions_user_id');
    }

    /**
     * Set the user for which the state relationship should be loaded.
     *
     * @param User $user
     */
    public static function setStateUser(User $user)
    {
        static::$stateUser = $user;
    }

    /**
     * Get the text formatter instance.
     *
     * @return Formatter
     */
    public static function getFormatter()
    {
        return static::$formatter;
    }

    /**
     * Get the markdown text formatter instance.
     *
     * @return MarkdownFormatter
     */
    public static function getMarkdownFormatter()
    {
        return static::$markdownFormatter;
    }

    /**
     * Set the text formatter instance.
     *
     * @param Formatter $formatter
     */
    public static function setFormatter(Formatter $formatter)
    {
        static::$formatter = $formatter;
    }

    /**
     * Set the markdown text formatter instance.
     *
     * @param MarkdownFormatter $formatter
     */
    public static function setMarkdownFormatter(MarkdownFormatter $formatter)
    {
        static::$markdownFormatter = $formatter;
    }
}
