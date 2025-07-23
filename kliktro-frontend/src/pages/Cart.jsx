import useCart from "../hooks/useCart";
import CartItemCard from "../components/CartItemCard";

export default function Cart() {
  const cart = useCart();

  if (cart.isEmpty()) {
    return <div>Cart is empty.</div>;
  }

  return (
    <>
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
      <div>Total: Rp {cart.totalPrice}</div>
    </>
  );
}
