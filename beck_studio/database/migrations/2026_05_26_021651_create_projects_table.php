<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('name');
            $table->string('client');
            $table->enum('type', ['Residencial', 'Comercial', 'Interiores', 'Reforma']);
            $table->enum('status', ['Em andamento', 'Revisão', 'Concluído', 'Rascunho']);
            $table->decimal('area', 8, 2);
            $table->integer('rooms');
            $table->integer('progress')->default(0);
            $table->string('cover');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
