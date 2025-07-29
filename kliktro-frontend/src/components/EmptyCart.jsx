import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-4">
      <ShoppingCart size={48} className="text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Your cart is empty
      </h2>
      <p className="text-gray-500 mb-6">
        Looks like you haven't added anything to your cart yet.
      </p>
      <Link
        to="/products"
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Browse Products
      </Link>
    </div>
  );
}
