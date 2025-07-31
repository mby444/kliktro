import useProducts from "../hooks/useProducts";
import useProduct from "../hooks/useProduct";
import ProductForm from "../components/ProductForm";
import AsyncError from "../components/AsyncError";
import EditFormSkeleton from "@/components/EditFormSkeleton";

export default function EditProduct() {
  const { stateEdit, dispatchEdit } = useProducts();
  const response = useProduct();

  if (!response.isLoaded) {
    return <EditFormSkeleton />;
  }

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  if (stateEdit.success) {
    window.location.href = "/admin";
  }

  const prefilledState = { ...stateEdit, inputData: response.data }; // Fill form fields with existing data

  return <ProductForm state={prefilledState} action={dispatchEdit} />;
}
