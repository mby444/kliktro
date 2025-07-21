import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItemCard from "../components/CartItemCard";

export default function Cart() {
  const cart = useContext(CartContext);

  if (cart.isEmpty()) {
    return <div>Cart is empty.</div>;
  }

  return (
    <div>
      {cart.items.map((item, i) => (
        <CartItemCard
          key={i}
          item={item}
          onUpdate={cart.updateItem}
          onRemove={cart.removeItem}
        />
      ))}
    </div>
  );
}
