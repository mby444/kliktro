import useProducts from "../hooks/useProducts";
import Spinner from "../components/Spinner";
import AsyncError from "../components/AsyncError";
import ProductCRUDTable from "../components/ProductCRUDTable";

export default function AdminPanel() {
  const response = useProducts();

  if (!response.isLoaded) {
    return <Spinner />;
  }

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  return (
    <>
      <div>
        <button>Add Product</button>
      </div>
      <ProductCRUDTable data={response.data} />
    </>
  );
}
