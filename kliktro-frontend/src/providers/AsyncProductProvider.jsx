import { Outlet } from "react-router";
import ProductContext from "../context/ProductContext";
import useProductProvider from "../hooks/useProductProvider";

export default function AsyncProductProvider() {
  const response = useProductProvider();

  return (
    <ProductContext.Provider value={response}>
      <Outlet />
    </ProductContext.Provider>
  );
}
