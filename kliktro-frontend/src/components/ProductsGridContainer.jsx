import { Link } from "react-router";
import { Home } from "lucide-react";
import EmptyProduct from "./EmptyProduct";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

const ProductsGridContainer = ({ data: products }) => {
  if (!products.length) {
    return <EmptyProduct />;
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
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
