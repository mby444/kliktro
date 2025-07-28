import { createBrowserRouter } from "react-router";
import AuthProvider from "./providers/AuthProvider";
import CartProvider from "./providers/CartProvider";
import AsyncProductsProvider from "./providers/AsyncProductsProvider";
import AsyncProductProvider from "./providers/AsyncProductProvider";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

const router = createBrowserRouter([
  {
    Component: AuthProvider,
    children: [
      {
        path: "/",
        Component: AsyncProductsProvider,
        children: [
          {
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
                        Component: AsyncProductProvider,
                        children: [{ index: true, Component: ProductDetail }],
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
              {
                path: "/admin/add",
                Component: AddProduct,
              },
              {
                path: "/admin/edit/:id",
                Component: AsyncProductProvider,
                children: [{ index: true, Component: EditProduct }],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
