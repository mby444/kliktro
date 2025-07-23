import { Outlet } from "react-router";
import useCartProvider from "../hooks/useCartProvider";
import CartContext from "../context/CartContext";

export default function CartProvider() {
  const cart = useCartProvider();
  return (
    <CartContext.Provider value={cart}>
      <Outlet />
    </CartContext.Provider>
  );
}
