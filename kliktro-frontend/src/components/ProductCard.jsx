import { NavLink } from "react-router";

export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="p-4 shadow rounded bg-white">
      <NavLink to={`/products/${product.id}`}>
        <img
          src={product.image_url}
          alt={product.name}
          className="h-40 object-cover w-full"
        />
      </NavLink>
      <h2 className="text-lg font-bold mt-2">
        <NavLink to={`/products/${product.id}`}>{product.name}</NavLink>
      </h2>
      <p className="text-sm text-gray-600">
        Rp {product.price.toLocaleString()}
      </p>
    </div>
  );
}
