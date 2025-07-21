import { RouterProvider } from "react-router";
import useCart from "./hooks/useCart";
import CartContext from "./context/CartContext";
import router from "./router";

export default function App() {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}
