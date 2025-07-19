<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'description' => fake()->paragraph(5),
            'price' => fake()->numberBetween(50000, 25000000),
            'stock' => fake()->numberBetween(0, 1000),
            'image_url' => fake()->url(),
            'category' => fake()->word(),
        ];
    }
}
