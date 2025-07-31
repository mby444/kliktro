// External Libraries
import { Link } from "react-router";

// Hooks
import useProducts from "@/hooks/useProducts";

// Components
import AsyncError from "@/components/AsyncError";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCRUDTable from "@/components/ProductCRUDTable";
import ProductCRUDTableSkeleton from "@/components/ProductCRUDTableSkeleton";

// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
