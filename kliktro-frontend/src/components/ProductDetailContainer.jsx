import { useState, useContext } from "react";
import { useAsyncValue } from "react-router";
import CartContext from "../context/CartContext";

export default function ProductDetailContainer() {
  const { data } = useAsyncValue();
  const cart = useContext(CartContext);
  const [qtyInput, setQtyInput] = useState(1);

  const handleQtyChange = (ev) => {
    const value = parseInt(ev.target.value);

    if (value < 1) {
      setQtyInput(1);
      return;
    }

    if (value > data.stock) {
      setQtyInput(data.stock);
      return;
    }

    setQtyInput(value);
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
  };

  return (
    <div>
      <img src={data.image_url} alt={data.name} />
      <div>Name: {data.name}</div>
      <div>Price: {data.price}</div>
      <div>Stock: {data.stock}</div>
      <div>{data.description}</div>
      <input type="number" onChange={handleQtyChange} value={qtyInput} />
      <button onClick={handleAddToCart} className="bg-gray-400 cursor-pointer">
        Add to cart
      </button>
    </div>
  );
}
