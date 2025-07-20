export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="p-4 shadow rounded bg-white">
      <img
        src={product.image_url}
        alt={product.name}
        className="h-40 object-cover w-full"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">
        Rp {product.price.toLocaleString()}
      </p>
    </div>
  );
}
