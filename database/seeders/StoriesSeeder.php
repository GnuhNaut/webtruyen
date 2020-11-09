<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Story;
use Illuminate\Support\Facades\DB;

class StoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $authors = DB::table('authors')->get()->toArray();
        foreach($authors as $author){
            $story = Story::factory(3)->create([
                'author_id' => $author->id
            ]);
        }
    }
}
