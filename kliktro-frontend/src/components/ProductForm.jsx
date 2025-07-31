import { useState, useRef } from "react";
import { Link } from "react-router";
import SubmitButton from "./SubmitButton";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { X } from "lucide-react";
import Swal from "sweetalert2";

export default function ProductForm({ state, action = Function() }) {
  const data = state.inputData;
  const [input, setInput] = useState(data);
  const [preview, setPreview] = useState(
    input.image ? URL.createObjectURL(input.image) : null
  );
  const fileInputRef = useRef();

  const handleInputChange = (ev) => {
    const { id: key, value } = ev.target;
    setInput({ ...input, [key]: value });
  };

  const handleFileInputChange = (ev) => {
    const file = ev.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      Swal.fire("Error!", "File must be an image!", "error");
      ev.target.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      Swal.fire("Error!", "File is too large, maximum size is 2 MB!", "error");
      ev.target.value = "";
      return;
    }

    setInput({ ...input, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleCategoryChange = (value) => {
    setInput({ ...input, category: value });
  };

  const handleRemoveImage = () => {
    setInput({ ...input, image: null });
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="max-w-3xl mx-auto mt-12 border border-muted shadow-xl bg-white">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-3xl font-bold tracking-tight">
          {input.id ? "Edit Product" : "Add New Product"}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Fill out the product details below to save changes.
        </CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-6">
          {!!state.message && (
            <div className="text-sm text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded">
              {state.message}
            </div>
          )}

          <Input type="hidden" name="id" value={input.id} />

          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="E.g., Sony WH-1000XM5"
              value={input.name || ""}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Write a short product description..."
              value={input.description || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="price">Price (IDR)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="e.g., 1599000"
                value={input.price || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                placeholder="e.g., 24"
                value={input.stock || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">
              Product Image {input.id && "(optional)"}
            </Label>

            <div className="flex items-start gap-4">
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                required={!input.id}
                ref={fileInputRef}
                className="w-full"
              />

              {preview && (
                <div className="relative w-24 h-24 rounded overflow-hidden border">
                  <img
                    src={preview}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-1 right-1 bg-white text-red-600 hover:text-red-800 rounded-full p-1 shadow">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Select Category</Label>
            <Select
              name="category"
              value={input.category || ""}
              onValueChange={handleCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder="-- Select Category --" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Audio",
                  "Television",
                  "Computers",
                  "Smartphone",
                  "Camera",
                  "Computer Accessories",
                  "Wearable",
                  "Tablet",
                  "Accessories",
                  "Drone",
                ].map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between px-6 py-4 border-t mt-4">
          <Button asChild variant="outline">
            <Link to="/admin">Back</Link>
          </Button>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
