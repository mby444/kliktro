<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:1000',
            'stock' => 'required|numeric|min:0',
            'image_url' => 'required|string|max:255',
            'category' => 'required|string|max:255',
        ]);

        return Product::create($validatedData);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:1000',
            'stock' => 'required|numeric|min:0',
            'image_url' => 'required|string|max:255',
            'category' => 'required|string|max:255',
        ]);

        $product = Product::findOrFail($id);
        $product->update($validatedData);

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deleted = Product::destroy($id);
        return response()->json(['deleted' => $deleted > 0]);
    }
}
