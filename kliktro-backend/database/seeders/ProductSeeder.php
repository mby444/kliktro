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
            // --- Audio (3) ---
            [
                'name' => 'JBL Tune 500 Headphone',
                'price' => 350000,
                'description' => 'A lightweight on-ear headphone delivering powerful bass, comfort for long listening sessions, and easy portability wherever you go.',
                'stock' => 10,
                'image_url' => 'http://localhost:8000/storage/images/products/JBL Tune 500 Headphone.jpg',
                'category' => 'Audio'
            ],
            [
                'name' => 'Anker Soundcore Bluetooth Speaker',
                'price' => 500000,
                'description' => 'A compact speaker with deep bass, crystal-clear sound, and up to 24 hours of wireless playback for music anywhere.',
                'stock' => 15,
                'image_url' => 'http://localhost:8000/storage/images/products/Anker Soundcore Bluetooth Speaker.jpg',
                'category' => 'Audio'
            ],
            [
                'name' => 'Sony WF-C500 Wireless Earbuds',
                'price' => 850000,
                'description' => 'Truly wireless earbuds with powerful sound, long battery life, and a comfortable fit for daily use.',
                'stock' => 7,
                'image_url' => 'http://localhost:8000/storage/images/products/Sony WF-C500 Wireless Earbuds.jpg',
                'category' => 'Audio'
            ],

            // --- Television (3) ---
            [
                'name' => 'Samsung 43 4K UHD Smart TV',
                'price' => 4500000,
                'description' => 'A sleek 43-inch television with stunning 4K clarity, integrated smart features, and immersive audio for your living room entertainment.',
                'stock' => 5,
                'image_url' => 'http://localhost:8000/storage/images/products/Samsung 43 4K UHD Smart TV.jpg',
                'category' => 'Television'
            ],
            [
                'name' => 'LG 50 NanoCell 4K Smart TV',
                'price' => 7200000,
                'description' => '50-inch Smart TV with NanoCell display for vibrant colors and smart voice controls via AI ThinQ.',
                'stock' => 4,
                'image_url' => 'http://localhost:8000/storage/images/products/LG 50 NanoCell 4K Smart TV.jpg',
                'category' => 'Television'
            ],
            [
                'name' => 'Xiaomi Mi TV P1 32',
                'price' => 2300000,
                'description' => 'Affordable Android TV with Google Assistant, Dolby Audio, and a bezel-less design.',
                'stock' => 6,
                'image_url' => 'https://picsum.photos/seed/xiaomitv/600/400',
                'category' => 'Television'
            ],

            // --- Computers (3) ---
            [
                'name' => 'ASUS VivoBook 15',
                'price' => 7500000,
                'description' => 'A stylish and lightweight laptop powered by AMD Ryzen 5 with SSD storage, ideal for multitasking and everyday productivity.',
                'stock' => 8,
                'image_url' => 'https://picsum.photos/seed/laptop/600/400',
                'category' => 'Computers'
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
                'name' => 'HP Pavilion 14 Ryzen 7',
                'price' => 9200000,
                'description' => 'A powerful laptop with Ryzen 7, backlit keyboard, and SSD storage perfect for office and study.',
                'stock' => 5,
                'image_url' => 'https://picsum.photos/seed/hp14/600/400',
                'category' => 'Computers'
            ],

            // --- Smartphone (3) ---
            [
                'name' => 'Xiaomi Redmi Note 12',
                'price' => 2999000,
                'description' => 'A budget-friendly smartphone with AMOLED display, smooth performance, and a large battery that keeps you powered all day.',
                'stock' => 12,
                'image_url' => 'https://picsum.photos/seed/redmi/600/400',
                'category' => 'Smartphone'
            ],
            [
                'name' => 'Samsung Galaxy A24',
                'price' => 2799000,
                'description' => 'A vibrant AMOLED screen, 50MP camera, and 5000mAh battery make this phone a solid daily driver.',
                'stock' => 10,
                'image_url' => 'https://picsum.photos/seed/galaxya24/600/400',
                'category' => 'Smartphone'
            ],
            [
                'name' => 'Realme C55 NFC',
                'price' => 2399000,
                'description' => 'Slim design, NFC support, and punch-hole display at an affordable price.',
                'stock' => 14,
                'image_url' => 'https://picsum.photos/seed/realme/600/400',
                'category' => 'Smartphone'
            ],

            // --- Camera (3) ---
            [
                'name' => 'Canon EOS M50 Mark II Mirrorless Camera',
                'price' => 9500000,
                'description' => 'A compact mirrorless camera with 4K video, fast autofocus, and a vari-angle touchscreen perfect for vloggers and photographers.',
                'stock' => 3,
                'image_url' => 'https://picsum.photos/seed/canon/600/400',
                'category' => 'Camera'
            ],
            [
                'name' => 'Sony ZV-1F Vlogging Camera',
                'price' => 8400000,
                'description' => 'Compact 4K vlogging camera with bokeh mode, face tracking, and directional mic.',
                'stock' => 2,
                'image_url' => 'https://picsum.photos/seed/sonycamera/600/400',
                'category' => 'Camera'
            ],
            [
                'name' => 'Fujifilm Instax Mini 11',
                'price' => 1150000,
                'description' => 'Instant camera perfect for capturing memories on the spot with automatic exposure.',
                'stock' => 6,
                'image_url' => 'https://picsum.photos/seed/fujifilm/600/400',
                'category' => 'Camera'
            ],

            // --- Computer Accessories (3 already exist) ---
            [
                'name' => 'Epson L3210 EcoTank Printer',
                'price' => 2300000,
                'description' => 'A multifunction printer with refillable ink tanks, ideal for cost-efficient printing, scanning, and copying at home or in small offices.',
                'stock' => 6,
                'image_url' => 'https://picsum.photos/seed/printer/600/400',
                'category' => 'Computer Accessories'
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
                'name' => 'Logitech C920 HD Pro Webcam',
                'price' => 1150000,
                'description' => 'A full HD webcam with stereo microphones, auto light correction, and autofocus, perfect for meetings and live streaming.',
                'stock' => 5,
                'image_url' => 'https://picsum.photos/seed/webcam/600/400',
                'category' => 'Computer Accessories'
            ],

            // --- Wearable (3) ---
            [
                'name' => 'Amazfit Bip U Pro Smartwatch',
                'price' => 750000,
                'description' => 'A lightweight smartwatch with built-in GPS, health monitoring features, and long battery life for active lifestyles.',
                'stock' => 9,
                'image_url' => 'https://picsum.photos/seed/smartwatch/600/400',
                'category' => 'Wearable'
            ],
            [
                'name' => 'Xiaomi Mi Band 7',
                'price' => 490000,
                'description' => 'Slim fitness tracker with AMOLED display, heart rate monitor, and sleep tracking.',
                'stock' => 15,
                'image_url' => 'https://picsum.photos/seed/miband/600/400',
                'category' => 'Wearable'
            ],
            [
                'name' => 'Samsung Galaxy Watch 4',
                'price' => 3200000,
                'description' => 'Feature-rich smartwatch with body composition analysis and Wear OS support.',
                'stock' => 4,
                'image_url' => 'https://picsum.photos/seed/galaxywatch/600/400',
                'category' => 'Wearable'
            ],

            // --- Tablet (3) ---
            [
                'name' => 'Samsung Galaxy Tab A8',
                'price' => 3200000,
                'description' => 'A versatile tablet with a 10.5-inch display, quad speakers, and powerful performance for learning, entertainment, and multitasking.',
                'stock' => 10,
                'image_url' => 'https://picsum.photos/seed/tablet/600/400',
                'category' => 'Tablet'
            ],
            [
                'name' => 'Realme Pad Mini',
                'price' => 2100000,
                'description' => 'Compact tablet with an 8.7 display, large battery, and dual speakers for content consumption.',
                'stock' => 8,
                'image_url' => 'https://picsum.photos/seed/realmetab/600/400',
                'category' => 'Tablet'
            ],
            [
                'name' => 'Huawei MatePad T10',
                'price' => 2300000,
                'description' => '10.1-inch tablet with stereo sound and parental control, great for families.',
                'stock' => 6,
                'image_url' => 'https://picsum.photos/seed/huaweitab/600/400',
                'category' => 'Tablet'
            ],

            // --- Accessories (3) ---
            [
                'name' => 'Anker 20,000mAh Power Bank',
                'price' => 450000,
                'description' => 'A high-capacity portable charger with dual USB ports and fast charging support for reliable power on the go.',
                'stock' => 20,
                'image_url' => 'https://picsum.photos/seed/powerbank/600/400',
                'category' => 'Accessories'
            ],
            [
                'name' => 'Baseus Car Phone Holder',
                'price' => 150000,
                'description' => 'Magnetic car mount that holds your phone securely while driving.',
                'stock' => 18,
                'image_url' => 'https://picsum.photos/seed/baseus/600/400',
                'category' => 'Accessories'
            ],
            [
                'name' => 'UGREEN USB-C Hub 6-in-1',
                'price' => 350000,
                'description' => 'Compact USB-C hub with HDMI, USB 3.0, SD card reader, and more.',
                'stock' => 9,
                'image_url' => 'https://picsum.photos/seed/ugreenhub/600/400',
                'category' => 'Accessories'
            ],

            // --- Drone (3) ---
            [
                'name' => 'DJI Mini 2 SE Drone',
                'price' => 5900000,
                'description' => 'A compact drone offering 2.7K video, intelligent flight features, and stable GPS positioning for beginners and hobbyists.',
                'stock' => 2,
                'image_url' => 'https://picsum.photos/seed/drone/600/400',
                'category' => 'Drone'
            ],
            [
                'name' => 'Ryze Tello Drone',
                'price' => 1600000,
                'description' => 'An educational drone powered by DJI, great for coding and learning flight basics.',
                'stock' => 6,
                'image_url' => 'https://picsum.photos/seed/tello/600/400',
                'category' => 'Drone'
            ],
            [
                'name' => 'FIMI X8 SE 2022 V2',
                'price' => 7800000,
                'description' => 'Foldable drone with 4K camera, 8KM range, and smart flight modes for aerial content.',
                'stock' => 3,
                'image_url' => 'https://picsum.photos/seed/fimi/600/400',
                'category' => 'Drone'
            ],
        ];

        foreach ($products as &$product) {
            $product['image_url'] = 'http://localhost:8000/uploads/products/' . str_replace(' ', '_', $product['name']) . '.jpg';
        }
        unset($product);

        Product::truncate();

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
