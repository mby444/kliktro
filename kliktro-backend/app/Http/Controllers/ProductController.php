<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function show(string $id)
    {
        return Product::findOrFail($id);
    }

    public function store(Request $request)
    {
        $image     = $request->file('image');
        $fileName  = Str::uuid() . '.' . $image->getClientOriginalExtension();
        $directory = public_path('uploads/products');

        if (!file_exists($directory)) {
            mkdir($directory, 0755, true);
        }

        $image->move($directory, $fileName);

        $product = [
            'name'        => $request->input('name'),
            'description' => $request->input('description'),
            'price'       => $request->input('price'),
            'stock'       => $request->input('stock'),
            'image_url'   => $request->getSchemeAndHttpHost() . "/uploads/products/$fileName",
            'category'    => $request->input('category'),
        ];

        return Product::create($product);
    }

    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);

        $attributes = [
            'name'        => $request->input('name'),
            'description' => $request->input('description'),
            'price'       => $request->input('price'),
            'stock'       => $request->input('stock'),
            'category'    => $request->input('category'),
        ];

        if ($request->hasFile('image')) {
            $image     = $request->file('image');
            $fileName  = Str::uuid() . '.' . $image->getClientOriginalExtension();
            $directory = public_path('uploads/products');

            if (!file_exists($directory)) {
                mkdir($directory, 0755, true);
            }

            $image->move($directory, $fileName);

            $oldUrl = $product->image_url;
            $oldPath = public_path(parse_url($oldUrl, PHP_URL_PATH));
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }

            $attributes['image_url'] = $request->getSchemeAndHttpHost() . "/uploads/products/$fileName";
        }

        $product->update($attributes);

        return $product;
    }

    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);

        $imagePath = public_path(parse_url($product->image_url, PHP_URL_PATH));
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }

        $deleted = Product::destroy($id);

        return response()->json(['deleted' => $deleted > 0]);
    }
}