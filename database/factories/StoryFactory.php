<?php

namespace Database\Factories;

use App\Models\Story;
use Illuminate\Database\Eloquent\Factories\Factory;

class StoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Story::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'author_id' => null,
            'name' => $this->faker->name,
            'chap' => 0,
            'status' => 'Vẫn còn',
            'category_id' => $this->faker->numberBetween(1, 6)
        ];
    }
}
