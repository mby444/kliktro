import { Suspense } from "react";
import { Await } from "react-router";
import Spinner from "../components/Spinner";
import ErrorElement from "../components/ErrorElement";
import ProductCRUDTable from "../components/ProductCRUDTable";
import API from "../api";

export default function AdminPanel() {
  const pendingResponse = API.get(`/products`);
  const defaultErrorMessage = "Failed to load products.";

  return (
    <>
      <div>
        <button>Add Product</button>
      </div>
      <Suspense fallback={<Spinner />}>
        <Await
          resolve={pendingResponse}
          errorElement={<ErrorElement defaultMessage={defaultErrorMessage} />}
          children={<ProductCRUDTable />}
        />
      </Suspense>
    </>
  );
}
