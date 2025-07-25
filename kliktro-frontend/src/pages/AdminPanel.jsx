import useProducts from "../hooks/useProducts";
import Spinner from "../components/Spinner";
import AsyncError from "../components/AsyncError";
import ProductCRUDTable from "../components/ProductCRUDTable";
import { Button } from "@/components/ui/button";

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
        <Button className="cursor-pointer">Add Product</Button>
      </div>
      <ProductCRUDTable data={response.data} />
    </>
  );
}
