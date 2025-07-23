import { RouterProvider } from "react-router";
import CartProvider from "./components/CartProvider";
import router from "./router";

export default function App() {
  return (
    // <CartProvider>
    //   <RouterProvider router={router} />
    // </CartProvider>
    <RouterProvider router={router} />
  );
}
