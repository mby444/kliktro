import { Suspense } from "react";
import { useParams, Await } from "react-router";
import ProductDetailContainer from "../components/ProductDetailContainer";
import Spinner from "../components/Spinner";
import ErrorElement from "../components/ErrorElement";
import API from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const pendingResponse = API.get(`/products/${id}`);
  const defaultErrorMessage = "Failed to load product.";

  return (
    <Suspense fallback={<Spinner />}>
      <Await
        resolve={pendingResponse}
        errorElement={<ErrorElement defaultMessage={defaultErrorMessage} />}
        children={<ProductDetailContainer />}
      />
    </Suspense>
  );
}
