<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use HasFactory;
    protected $table = 'stories';
    public function owner()
    {
        return $this->belongsTo(Author::class);
    }
    public function has()
    {
        return $this->hasMany(Chapter::class);
    }
}
