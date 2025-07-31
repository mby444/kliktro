<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Product::findOrFail($id);
    }
    
    /**
     * Store a new resource.
     */
    public function store(Request $request)
    {
        $image      = $request->file('image');
        $fileName   = Str::uuid() . '.' . $image->getClientOriginalExtension();
        $path       = $image->storeAs('images/products', $fileName, "public");
        $product = [
            "name"=> $request->input("name"),
            "description"=> $request->input("description"),
            "price"=> $request->input("price"),
            "stock"=> $request->input("stock"),
            "image_url"=> $request->schemeAndHttpHost() . Storage::url($path),
            "category"=> $request->input("category"),
        ];

        return Product::create($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);
        $attributes = [
            "name"=> $request->input("name"),
            "description"=> $request->input("description"),
            "price"=> $request->input("price"),
            "stock"=> $request->input("stock"),
            "category"=> $request->input("category"),
        ];

        if ($request->hasFile("image")) {
            $image = $request->file('image');
            $fileName = Str::uuid() . '.' . $image->getClientOriginalExtension();
            $path = $image->storeAs('images/products', $fileName, "public");
    
            $oldRelativePath = str_replace(asset("storage") . "/", "", $product->image_url);
    
            Storage::disk("public")->delete($oldRelativePath);
            $attributes["image_url"] = $request->schemeAndHttpHost() . Storage::url($path);
        }

        $product->update($attributes);

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);
        $relativePath = str_replace(asset('storage') . '/', '', $product->image_url);
        Storage::disk('public')->delete($relativePath);
        $deleted = Product::destroy($id);

        return response()->json(['deleted' => $deleted > 0]);
    }
}
