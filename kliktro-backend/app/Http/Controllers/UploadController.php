<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;

class UploadController extends Controller
{
    public function show($filename) 
    {
        $path = storage_path('app/public/uploads/products/' . $filename);

        if (!File::exists($path)) {
            // echo "Not found";
            abort(404);
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        return response($file, 200)->header("Content-Type", $type);
    }
}