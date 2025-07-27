import { Link } from "react-router";
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
        <Button asChild={true} className="cursor-pointer">
          <Link to="/admin/add">Add Product</Link>
        </Button>
      </div>
      <ProductCRUDTable data={response.data} />
    </>
  );
}
