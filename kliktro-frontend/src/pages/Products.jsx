import { Suspense } from "react";
import { Await } from "react-router";
import Spinner from "../components/Spinner";
import ErrorElement from "../components/ErrorElement";
import API from "../api";
import ProductsGridContainer from "../components/ProductsGridContainer";

export default function Products() {
  const pendingResponse = API.get(`/products`);
  const defaultErrorMessage = "Failed to load products.";

  return (
    <Suspense fallback={<Spinner />}>
      <Await
        resolve={pendingResponse}
        errorElement={<ErrorElement defaultMessage={defaultErrorMessage} />}
        children={<ProductsGridContainer />}
      />
    </Suspense>
  );
}
