// Hooks
import useProducts from "@/hooks/useProducts";
import useProduct from "@/hooks/useProduct";

// Components
import ProductForm from "@/components/ProductForm";
import AsyncError from "@/components/AsyncError";
import EditFormSkeleton from "@/components/EditFormSkeleton";

export default function EditProduct() {
  const { stateEdit, dispatchEdit } = useProducts();
  const response = useProduct();

  // Show loading skeleton while fetching data
  if (!response.isLoaded) {
    return <EditFormSkeleton />;
  }

  // Show error message if request failed
  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  // Redirect after successful edit
  if (stateEdit.success) {
    window.location.href = "/admin";
  }

  // Pre-fill form with existing product data
  const prefilledState = {
    ...stateEdit,
    inputData: response.data,
  };

  return <ProductForm state={prefilledState} action={dispatchEdit} />;
}
