import { Link } from "react-router";
import useProducts from "../hooks/useProducts";
import AsyncError from "../components/AsyncError";
import ProductCRUDTable from "../components/ProductCRUDTable";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ProductCRUDTableSkeleton from "@/components/ProductCRUDTableSkeleton";
import Breadcrumb from "@/components/Breadcrumb";

export default function AdminPanel() {
  const response = useProducts();

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb />
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Product Management</h1>
        <Button asChild>
          <Link to="/admin/add">Add Product</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Product List</CardTitle>
        </CardHeader>
        <CardContent>
          {response.isLoaded ? (
            <ProductCRUDTable data={response.data} />
          ) : (
            <ProductCRUDTableSkeleton />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
