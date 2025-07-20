<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'JBL Tune 500 Headphone',
                'price' => 350000,
                'description' => 'A lightweight on-ear headphone delivering powerful bass, comfort for long listening sessions, and easy portability wherever you go.',
                'stock' => 10,
                'image_url' => 'https://picsum.photos/seed/headphone/600/400',
                'category' => 'Audio'
            ],
            [
                'name' => 'Samsung 43" 4K UHD Smart TV',
                'price' => 4500000,
                'description' => 'A sleek 43-inch television with stunning 4K clarity, integrated smart features, and immersive audio for your living room entertainment.',
                'stock' => 5,
                'image_url' => 'https://picsum.photos/seed/tv/600/400',
                'category' => 'Television'
            ],
            [
                'name' => 'ASUS VivoBook 15',
                'price' => 7500000,
                'description' => 'A stylish and lightweight laptop powered by AMD Ryzen 5 with SSD storage, ideal for multitasking and everyday productivity.',
                'stock' => 8,
                'image_url' => 'https://picsum.photos/seed/laptop/600/400',
                'category' => 'Computers'
            ],
            [
                'name' => 'Anker Soundcore Bluetooth Speaker',
                'price' => 500000,
                'description' => 'A compact speaker with deep bass, crystal-clear sound, and up to 24 hours of wireless playback for music anywhere.',
                'stock' => 15,
                'image_url' => 'https://picsum.photos/seed/speaker/600/400',
                'category' => 'Audio'
            ],
            [
                'name' => 'Xiaomi Redmi Note 12',
                'price' => 2999000,
                'description' => 'A budget-friendly smartphone with AMOLED display, smooth performance, and a large battery that keeps you powered all day.',
                'stock' => 12,
                'image_url' => 'https://picsum.photos/seed/redmi/600/400',
                'category' => 'Smartphone'
            ],
            [
                'name' => 'Canon EOS M50 Mark II Mirrorless Camera',
                'price' => 9500000,
                'description' => 'A compact mirrorless camera with 4K video, fast autofocus, and a vari-angle touchscreen perfect for vloggers and photographers.',
                'stock' => 3,
                'image_url' => 'https://picsum.photos/seed/canon/600/400',
                'category' => 'Camera'
            ],
            [
                'name' => 'LG 24-inch Full HD IPS Monitor',
                'price' => 1850000,
                'description' => 'A 24-inch monitor offering sharp full HD resolution, wide viewing angles, and eye comfort technology for work and play.',
                'stock' => 7,
                'image_url' => 'https://picsum.photos/seed/monitor/600/400',
                'category' => 'Computers'
            ],
            [
                'name' => 'Epson L3210 EcoTank Printer',
                'price' => 2300000,
                'description' => 'A multifunction printer with refillable ink tanks, ideal for cost-efficient printing, scanning, and copying at home or in small offices.',
                'stock' => 6,
                'image_url' => 'https://picsum.photos/seed/printer/600/400',
                'category' => 'Computer Accessories'
            ],
            [
                'name' => 'Amazfit Bip U Pro Smartwatch',
                'price' => 750000,
                'description' => 'A lightweight smartwatch with built-in GPS, health monitoring features, and long battery life for active lifestyles.',
                'stock' => 9,
                'image_url' => 'https://picsum.photos/seed/smartwatch/600/400',
                'category' => 'Wearable'
            ],
            [
                'name' => 'Logitech MX Master 3 Wireless Mouse',
                'price' => 1200000,
                'description' => 'An ergonomic mouse designed for productivity with precise tracking, custom buttons, and seamless multi-device support.',
                'stock' => 11,
                'image_url' => 'https://picsum.photos/seed/mouse/600/400',
                'category' => 'Computer Accessories'
            ],
            [
                'name' => 'Razer BlackWidow V3 Mechanical Keyboard',
                'price' => 1800000,
                'description' => 'A high-performance mechanical keyboard with tactile switches, customizable RGB lighting, and a durable aluminum frame.',
                'stock' => 4,
                'image_url' => 'https://picsum.photos/seed/keyboard/600/400',
                'category' => 'Computer Accessories'
            ],
            [
                'name' => 'Samsung Galaxy Tab A8',
                'price' => 3200000,
                'description' => 'A versatile tablet with a 10.5-inch display, quad speakers, and powerful performance for learning, entertainment, and multitasking.',
                'stock' => 10,
                'image_url' => 'https://picsum.photos/seed/tablet/600/400',
                'category' => 'Tablet'
            ],
            [
                'name' => 'Anker 20,000mAh Power Bank',
                'price' => 450000,
                'description' => 'A high-capacity portable charger with dual USB ports and fast charging support for reliable power on the go.',
                'stock' => 20,
                'image_url' => 'https://picsum.photos/seed/powerbank/600/400',
                'category' => 'Accessories'
            ],
            [
                'name' => 'DJI Mini 2 SE Drone',
                'price' => 5900000,
                'description' => 'A compact drone offering 2.7K video, intelligent flight features, and stable GPS positioning for beginners and hobbyists.',
                'stock' => 2,
                'image_url' => 'https://picsum.photos/seed/drone/600/400',
                'category' => 'Drone'
            ],
            [
                'name' => 'Logitech C920 HD Pro Webcam',
                'price' => 1150000,
                'description' => 'A full HD webcam with stereo microphones, auto light correction, and autofocus, perfect for meetings and live streaming.',
                'stock' => 5,
                'image_url' => 'https://picsum.photos/seed/webcam/600/400',
                'category' => 'Computer Accessories'
            ],
        ];

        Product::truncate();

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
