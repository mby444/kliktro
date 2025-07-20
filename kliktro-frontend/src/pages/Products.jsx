import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { success, products } = useLoaderData();

  if (!success) {
    return <div>Failed to load products.</div>;
  }

  if (!products.length) {
    return <div>No products yet.</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}
