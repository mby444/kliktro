import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
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
        <p className="text-primary font-semibold">{product.price}</p>
      </div>
    </Link>
  );
}
