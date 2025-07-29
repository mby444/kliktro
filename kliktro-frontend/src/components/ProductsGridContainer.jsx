// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router";
// import {
//   Headphones,
//   Tv,
//   Laptop,
//   Smartphone,
//   Camera,
//   Mouse,
//   Watch,
//   TabletSmartphone,
//   PackageSearch,
//   Plane,
//   ListFilter,
// } from "lucide-react";
// import EmptyProduct from "./EmptyProduct";
// import { Button } from "./ui/button";

// const formatRupiah = (value) =>
//   new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     minimumFractionDigits: 0,
//   }).format(value);

// const categories = [
//   { icon: ListFilter, name: "All" },
//   { icon: Headphones, name: "Audio" },
//   { icon: Tv, name: "Television" },
//   { icon: Laptop, name: "Computers" },
//   { icon: Smartphone, name: "Smartphone" },
//   { icon: Camera, name: "Camera" },
//   { icon: Mouse, name: "Computer Accessories" },
//   { icon: Watch, name: "Wearable" },
//   { icon: TabletSmartphone, name: "Tablet" },
//   { icon: PackageSearch, name: "Accessories" },
//   { icon: Plane, name: "Drone" },
// ];

// const ProductsGridContainer = ({ data: products }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const searchQuery = searchParams.get("search") || "";
//   const categoryQuery = searchParams.get("category") || "";

//   const searchedProducts = !searchQuery
//     ? products
//     : products.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//   const filteredProducts =
//     selectedCategory.toLowerCase() === "all"
//       ? searchedProducts
//       : searchedProducts.filter(
//           (product) =>
//             product.category.toLowerCase() === selectedCategory.toLowerCase()
//         );

//   const doesCategoryExist = (category) => {
//     return categories
//       .map((c) => c.name.toLowerCase())
//       .includes(category.toLowerCase());
//   };

//   const syncCategoryTab = () => {
//     const category = categoryQuery || "all";
//     if (!doesCategoryExist(category)) {
//       setSelectedCategory("all");
//       return;
//     }
//     setSelectedCategory(category);
//   };

//   const changeCategory = (category) => {
//     setSearchParams((prev) => {
//       prev.delete("category");
//       prev.append("category", category);
//       return prev;
//     });
//   };

//   const handleClearSearch = () => {
//     setSearchParams((prev) => {
//       prev.delete("search");
//       return prev;
//     });
//   };

//   useEffect(() => {
//     syncCategoryTab();
//   }, [categoryQuery]);

//   return (
//     <div className="space-y-6">
//       {!!searchQuery && (
//         <div className="flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
//           <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
//             <PackageSearch className="text-black" size={20} />
//             <span>
//               Search result for:{" "}
//               <span className="font-semibold text-black">"{searchQuery}"</span>
//             </span>
//           </div>
//           <Button
//             onClick={handleClearSearch}
//             size="sm"
//             className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700">
//             Remove Search
//           </Button>
//         </div>
//       )}

//       <div className="flex flex-wrap gap-2">
//         {categories.map((category) => {
//           const Icon = category.icon;
//           const isActive =
//             selectedCategory.toLowerCase() === category.name.toLowerCase();
//           return (
//             <button
//               key={category.name}
//               onClick={() => changeCategory(category.name.toLowerCase())}
//               className={`flex items-center gap-2 px-4 py-2 rounded-full border transition text-sm
//                 ${
//                   isActive
//                     ? "bg-black text-white border-black"
//                     : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//                 }`}>
//               <Icon size={16} />
//               {category.name}
//             </button>
//           );
//         })}
//       </div>

//       {filteredProducts.length ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100">
//               <img
//                 src={product.image_url}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 space-y-2">
//                 <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
//                   {product.name}
//                 </h3>
//                 <p className="text-primary font-semibold">
//                   {formatRupiah(product.price)}
//                 </p>
//                 <Link to={`/products/${product.id}`}>
//                   <button className="mt-4 bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-900 transition text-sm">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <EmptyProduct />
//       )}
//     </div>
//   );
// };

// export default ProductsGridContainer;

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import {
  Headphones,
  Tv,
  Laptop,
  Smartphone,
  Camera,
  Mouse,
  Watch,
  TabletSmartphone,
  PackageSearch,
  Plane,
  ListFilter,
} from "lucide-react";
import EmptyProduct from "./EmptyProduct";
import { Button } from "./ui/button";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

const categories = [
  { icon: ListFilter, name: "All" },
  { icon: Headphones, name: "Audio" },
  { icon: Tv, name: "Television" },
  { icon: Laptop, name: "Computers" },
  { icon: Smartphone, name: "Smartphone" },
  { icon: Camera, name: "Camera" },
  { icon: Mouse, name: "Computer Accessories" },
  { icon: Watch, name: "Wearable" },
  { icon: TabletSmartphone, name: "Tablet" },
  { icon: PackageSearch, name: "Accessories" },
  { icon: Plane, name: "Drone" },
];

const ProductsGridContainer = ({ data: products }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const searchQuery = searchParams.get("search") || "";
  const categoryQuery = searchParams.get("category") || "";

  useEffect(() => {
    const isValid = categories.some(
      (c) => c.name.toLowerCase() === categoryQuery.toLowerCase()
    );
    setSelectedCategory(isValid ? categoryQuery : "all");
  }, [categoryQuery]);

  const handleChangeCategory = (category) => {
    setSearchParams((prev) => {
      prev.set("category", category);
      return prev;
    });
  };

  const handleClearSearch = () => {
    setSearchParams((prev) => {
      prev.delete("search");
      return prev;
    });
  };

  const filteredBySearch = !searchQuery
    ? products
    : products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const filteredProducts =
    selectedCategory.toLowerCase() === "all"
      ? filteredBySearch
      : filteredBySearch.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="space-y-6">
      {/* Search Result Notice */}
      {!!searchQuery && (
        <div className="flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
            <PackageSearch className="text-black" size={20} />
            <span>
              Search result for:{" "}
              <span className="font-semibold text-black">"{searchQuery}"</span>
            </span>
          </div>
          <Button
            onClick={handleClearSearch}
            size="sm"
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700">
            Remove Search
          </Button>
        </div>
      )}

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map(({ name, icon: Icon }) => {
          const isActive =
            selectedCategory.toLowerCase() === name.toLowerCase();

          return (
            <button
              key={name}
              onClick={() => handleChangeCategory(name.toLowerCase())}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition text-sm ${
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}>
              <Icon size={16} />
              {name}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filteredProducts.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-primary font-semibold">
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
      ) : (
        <EmptyProduct />
      )}
    </div>
  );
};

export default ProductsGridContainer;
