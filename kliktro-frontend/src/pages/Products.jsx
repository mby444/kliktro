import { Link } from "react-router";
import { Home } from "lucide-react";
import useProducts from "../hooks/useProducts";
import Spinner from "../components/Spinner";
import AsyncError from "../components/AsyncError";
import ProductsGridContainer from "../components/ProductsGridContainer";
import ProductsSkeleton from "@/components/ProductsSkeleton";

export default function Products() {
  const response = useProducts();

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <div className="flex items-center text-gray-900 text-sm mb-4">
        <Link to="/">
          <Home size={16} className="mr-1 text-black" />
        </Link>
        <span className="mx-1">/</span>
        <Link to="." className="text-black">
          Products
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-black">Our Products</h2>
      {response.isLoaded ? (
        <ProductsGridContainer data={response.data} />
      ) : (
        <ProductsSkeleton />
      )}
    </div>
  );
}
