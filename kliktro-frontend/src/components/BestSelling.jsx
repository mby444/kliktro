const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "Rp 1.950.000",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    name: "4K Smart TV",
    price: "Rp 13.500.000",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: "Rp 19.500.000",
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    name: "Smartphone Pro",
    price: "Rp 15.000.000",
    image: "https://picsum.photos/300/200?random=4",
  },
];

export default function BestSelling() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Best Selling Products
        </h2>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group block rounded-xl border shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1">
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={product.image}
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
          </div>
        ))}
      </div>
    </section>
  );
}
