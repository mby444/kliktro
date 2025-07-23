import { createBrowserRouter } from "react-router";
import AuthProvider from "./providers/AuthProvider";
import CartProvider from "./providers/CartProvider";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";

const router = createBrowserRouter([
  {
    Component: AuthProvider,
    children: [
      {
        path: "/",
        Component: CartProvider,
        children: [
          {
            Component: MainLayout,
            children: [
              {
                // Home page
                index: true,
                Component: Home,
              },
              {
                // User login required
                element: <ProtectedRoute adminOnly={false} />,
                children: [
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
        ],
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        // Admin login required
        element: <ProtectedRoute adminOnly={true} />,
        children: [
          {
            path: "/admin",
            Component: AdminPanel,
          },
        ],
      },
    ],
  },
]);

export default router;
