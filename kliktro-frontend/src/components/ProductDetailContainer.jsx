import { useState } from "react";
import useCart from "../hooks/useCart";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProductDetailContainer({ data }) {
  const cart = useCart();
  const [qtyInput, setQtyInput] = useState(1);

  const handleQtyChange = (newQty) => {
    if (newQty < 1) {
      setQtyInput(1);
    } else if (newQty > data.stock) {
      setQtyInput(data.stock);
    } else {
      setQtyInput(newQty);
    }
  };

  const handleAddToCart = () => {
    if (data.stock <= 0) {
      console.log("Can't add to cart, stock is empty.");
      return;
    }

    const item = {
      id: data.id,
      name: data.name,
      price: data.price,
      stock: data.stock,
      image_url: data.image_url,
      qty: qtyInput,
    };

    cart.addItem(item);
    // TODO: Change to sweetalert2 or something
    alert("Added to cart successfuly!");
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow rounded-lg flex flex-col md:flex-row gap-8">
      <div className="relative w-full md:w-1/2">
        <img
          src={data.image_url}
          alt={data.name}
          className="rounded-lg w-full"
        />
        {data.stock <= 0 && (
          <Badge className="absolute top-2 left-2 bg-red-600 text-white">
            Out of stock
          </Badge>
        )}
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
        <div className="text-lg text-gray-700">
          Price: Rp {data.price.toLocaleString()}
        </div>
        <div className="text-sm text-gray-500">
          Category:{" "}
          <span className="font-medium text-gray-700">{data.category}</span>
        </div>
        <div className="text-sm text-gray-500">Stock: {data.stock}</div>
        <p className="text-gray-600">{data.description}</p>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleQtyChange(qtyInput - 1)}
            disabled={qtyInput <= 1}
            className="cursor-pointer">
            <Minus size={16} />
          </Button>
          <span className="px-4 py-2 border rounded-md select-none">
            {qtyInput}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleQtyChange(qtyInput + 1)}
            disabled={qtyInput >= data.stock}
            className="cursor-pointer">
            <Plus size={16} />
          </Button>
        </div>

        <Button
          className="mt-4 bg-black text-white flex items-center gap-2 cursor-pointer select-none"
          onClick={handleAddToCart}
          disabled={data.stock <= 0}>
          <ShoppingCart size={16} /> Add to cart
        </Button>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { useAsyncValue } from "react-router";
// import useCart from "../hooks/useCart";

// export default function ProductDetailContainer() {
//   const { data } = useAsyncValue();
//   const cart = useCart();
//   const [qtyInput, setQtyInput] = useState(1);

//   const handleQtyChange = (ev) => {
//     const value = parseInt(ev.target.value);

//     if (value < 1) {
//       setQtyInput(1);
//       return;
//     }

//     if (value > data.stock) {
//       setQtyInput(data.stock);
//       return;
//     }

//     setQtyInput(value);
//   };

//   const handleAddToCart = () => {
//     if (data.stock <= 0) {
//       console.log("Can't add to cart, stock is empty.");
//       return;
//     }

//     const item = {
//       id: data.id,
//       name: data.name,
//       price: data.price,
//       stock: data.stock,
//       image_url: data.image_url,
//       qty: qtyInput,
//     };

//     cart.addItem(item);
//   };

//   return (
//     <div>
//       <img src={data.image_url} alt={data.name} />
//       <div>Name: {data.name}</div>
//       <div>Price: {data.price}</div>
//       <div>Stock: {data.stock}</div>
//       <div>{data.description}</div>
//       <input type="number" onChange={handleQtyChange} value={qtyInput} />
//       <button onClick={handleAddToCart} className="bg-gray-400 cursor-pointer">
//         Add to cart
//       </button>
//     </div>
//   );
// }
