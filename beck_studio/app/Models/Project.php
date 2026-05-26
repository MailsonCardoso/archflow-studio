<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'client',
        'type',
        'status',
        'area',
        'rooms',
        'progress',
        'cover',
        'description',
    ];

    // Casts
    protected $casts = [
        'area' => 'float',
        'rooms' => 'integer',
        'progress' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
?>
