import useProducts from "../hooks/useProducts";
import Breadcrumb from "@/components/Breadcrumb";
import AsyncError from "../components/AsyncError";
import ProductsGridContainer from "../components/ProductsGridContainer";
import ProductsSkeleton from "@/components/ProductsSkeleton";

export default function Products() {
  const response = useProducts();

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 pb-12 min-h-screen">
      <Breadcrumb />
      <h2 className="text-2xl font-semibold mb-6 text-black">Our Products</h2>
      {response.isLoaded ? (
        <ProductsGridContainer data={response.data} />
      ) : (
        <ProductsSkeleton />
      )}
    </div>
  );
}
