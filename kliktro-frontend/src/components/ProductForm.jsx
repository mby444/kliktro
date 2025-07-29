import { useState } from "react";
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

export default function ProductForm({
  data = {},
  action = Function(),
  message = "",
}) {
  const [input, setInput] = useState(data);

  const handleInputChange = (ev) => {
    const { id: key, value } = ev.target;
    setInput({ ...input, [key]: value });
  };

  const handleCategoryChange = (value) => {
    setInput({ ...input, category: value });
  };

  return (
    <Card className="max-w-3xl mx-auto mt-12 border border-muted shadow-xl bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">
          {input.id ? "Edit Product" : "Add New Product"}
        </CardTitle>
        <CardDescription>
          Fill out the product details below to save changes.
        </CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-6">
          {!!message && (
            <div className="text-sm text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded">
              {message}
            </div>
          )}

          <Input type="hidden" name="id" value={input.id} />

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Product Name
            </Label>
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
            <Label htmlFor="description" className="text-sm font-medium">
              Description
            </Label>
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
              <Label htmlFor="price" className="text-sm font-medium">
                Price (IDR)
              </Label>
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
              <Label htmlFor="stock" className="text-sm font-medium">
                Stock
              </Label>
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
            <Label htmlFor="image_url" className="text-sm font-medium">
              Product Image URL
            </Label>
            <Input
              id="image_url"
              name="image_url"
              type="url"
              placeholder="https://example.com/product.jpg"
              value={input.image_url || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium">
              Select Category
            </Label>
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
