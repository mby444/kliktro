import { createBrowserRouter } from "react-router";
import CartProvider from "./components/CartProvider";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: CartProvider,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "/products",
            Component: Products,
          },
          {
            path: "/products/:id",
            Component: ProductDetail,
          },
          {
            path: "/cart",
            Component: Cart,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/admin",
    Component: AdminPanel,
  },
]);

export default router;
