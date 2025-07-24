import { Outlet } from "react-router";
import ProductContext from "../context/ProductContext";
import useProductProvider from "../hooks/useProductProvider";
import Spinner from "../components/Spinner";
import AsyncError from "../components/AsyncError";

export default function AsyncProductProvider() {
  const response = useProductProvider();

  if (!response.isLoaded) {
    return <Spinner />;
  }

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  return (
    <ProductContext.Provider value={response.data}>
      <Outlet />
    </ProductContext.Provider>
  );
}
