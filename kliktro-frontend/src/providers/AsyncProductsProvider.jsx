import { Outlet } from "react-router";
import ProductsContext from "../context/ProductsContext";
import useProductsProvider from "../hooks/useProductsProvider";

export default function AsyncProductsProvider() {
  const response = useProductsProvider();

  return (
    <ProductsContext.Provider value={response}>
      <Outlet />
    </ProductsContext.Provider>
  );
}
