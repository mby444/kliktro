import { useAsyncValue } from "react-router";
import ProductCard from "./ProductCard";

export default function ProductsGridContainer() {
  const { data } = useAsyncValue();

  if (!data.length) {
    return <div>No products yet.</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}
