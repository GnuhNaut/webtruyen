<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Story;
use Illuminate\Support\Facades\DB;
use App\Models\Chapter;

class ChaptersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stories = DB::table('stories')->get()->toArray();
        foreach($stories as $story){
            $chap = Chapter::factory(20)->create([
                'story_id' => $story->id
            ]);
        }
    }
}
