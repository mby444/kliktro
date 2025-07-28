import { useState } from "react";
import { Link } from "react-router";
import {
  Headphones,
  Tv,
  Laptop,
  Smartphone,
  Camera,
  Mouse,
  Watch,
  TabletSmartphone,
  PackageSearch,
  Plane,
  ListFilter,
} from "lucide-react";
import EmptyProduct from "./EmptyProduct";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

const categories = [
  { icon: ListFilter, name: "All" },
  { icon: Headphones, name: "Audio" },
  { icon: Tv, name: "Television" },
  { icon: Laptop, name: "Computers" },
  { icon: Smartphone, name: "Smartphone" },
  { icon: Camera, name: "Camera" },
  { icon: Mouse, name: "Computer Accessories" },
  { icon: Watch, name: "Wearable" },
  { icon: TabletSmartphone, name: "Tablet" },
  { icon: PackageSearch, name: "Accessories" },
  { icon: Plane, name: "Drone" },
];

const ProductsGridContainer = ({ data: products }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (!filteredProducts.length) {
    return <EmptyProduct />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.name;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition cursor-pointer ${
                isActive
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}>
              <Icon size={16} />
              {category.name}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-48 object-cover transition duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black">
                {product.name}
              </h3>
              <p className="text-gray-700 font-medium mt-2">
                {formatRupiah(product.price)}
              </p>
              <Link to={`/products/${product.id}`}>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-900 transition text-sm">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGridContainer;
