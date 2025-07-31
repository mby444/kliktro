import useProducts from "@/hooks/useProducts";
import AsyncError from "./AsyncError";
import BestSellingSkeleton from "./BestSellingSkeleton";

export default function BestSelling() {
  const response = useProducts();

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  const bestSelling = response.isLoaded
    ? response.data.filter((_, i) => i < 4)
    : [];

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Best Selling Products
        </h2>
      </div>
      {response.isLoaded ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {bestSelling.map((product) => (
            <div
              key={product.id}
              className="group block rounded-xl border shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1">
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <BestSellingSkeleton />
      )}
    </section>
  );
}
