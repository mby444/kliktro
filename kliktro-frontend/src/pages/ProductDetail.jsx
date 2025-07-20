import { Suspense } from "react";
import { useParams, Await } from "react-router";
import Spinner from "../components/Spinner";
import ErrorElement from "../components/ErrorElement";
import API from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const pendingResponse = API.get(`/products/${id}`);
  const errorMessage = "Failed to load product.";

  return (
    <Suspense fallback={<Spinner />}>
      <Await
        resolve={pendingResponse}
        errorElement={<ErrorElement message={errorMessage} />}
        children={({ data }) => (
          <div>
            <div>Name: {data.name}</div>
            <div>Price: {data.price}</div>
            <div>Stock: {data.stock}</div>
          </div>
        )}
      />
    </Suspense>
  );
}
