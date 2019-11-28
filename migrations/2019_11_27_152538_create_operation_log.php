<?php

use Discuz\Database\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOperationLog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->schema()->create('operation_log', function (Blueprint $table) {
            $table->increments('id')->comment('日志 id');
            $table->char('action', 20)->default('')->comment('操作');
            $table->string('message')->default('')->comment('备注');
            $table->integer('log_able_id')->unsigned()->default(0)->comment('模型 id');
            $table->string('log_able_type')->default('')->comment('模型');
            $table->dateTime('created_at')->comment('创建时间');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $this->schema()->dropIfExists('operation_log');
    }
}