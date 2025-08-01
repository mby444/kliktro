<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

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
        $image    = $request->file('image');
        $fileName = Str::uuid() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('uploads/products', $fileName, 'public');

        $product = [
            'name'        => $request->input('name'),
            'description' => $request->input('description'),
            'price'       => $request->input('price'),
            'stock'       => $request->input('stock'),
            'image_url'   => $request->schemeAndHttpHost() . '/uploads/products/' . $fileName,
            'category'    => $request->input('category'),
        ];

        return Product::create($product);
    }

    public function update(Request $request, string $id)
    {
        $product    = Product::findOrFail($id);
        $attributes = [
            'name'        => $request->input('name'),
            'description' => $request->input('description'),
            'price'       => $request->input('price'),
            'stock'       => $request->input('stock'),
            'category'    => $request->input('category'),
        ];

        if ($request->hasFile('image')) {
            $image    = $request->file('image');
            $fileName = Str::uuid() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('uploads/products', $fileName, 'public');

            $oldRelativePath = str_replace($request->schemeAndHttpHost() . '/', '', $product->image_url);
            Storage::disk('public')->delete($oldRelativePath);

            $attributes['image_url'] = $request->schemeAndHttpHost() . '/uploads/products/' . $fileName;
        }

        $product->update($attributes);

        return $product;
    }

    public function destroy(Request $request, string $id)
    {
        $product       = Product::findOrFail($id);
        $relativePath  = str_replace($request->schemeAndHttpHost() . '/', '', $product->image_url);
        Storage::disk('public')->delete($relativePath);

        $deleted = Product::destroy($id);

        return response()->json(['deleted' => $deleted > 0]);
    }
}