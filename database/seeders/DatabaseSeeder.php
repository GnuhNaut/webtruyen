<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(\StoriesSeeder::class);
        $this->call(\ChaptersSeeder::class);
        $this->call(\UsersSeeder::class);
        $this->call(\AuthorsSeeder::class);
        $this->call(\CategoriesSeeder::class);

    }
}
