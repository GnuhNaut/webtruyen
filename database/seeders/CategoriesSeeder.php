<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::insert([
            [
                'id' => 1,
                'name' => 'Ngôn Tình'
            ],
            [
                'id' => 2,
                'name' => 'Tiên Hiệp'
            ],
            [
                'id' => 3,
                'name' => 'Kiếm Hiệp'
            ],
            [
                'id' => 4,
                'name' => 'Truyện Teen'
            ],
            [
                'id' => 5,
                'name' => 'Truyện Ma'
            ],
            [
                'id' => 6,
                'name' => 'Lịch Sử'
            ]
        ]);
    }
}
