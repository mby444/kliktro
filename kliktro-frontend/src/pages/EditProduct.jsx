import useProducts from "../hooks/useProducts";
import useProduct from "../hooks/useProduct";
import ProductForm from "../components/ProductForm";
import AsyncError from "../components/AsyncError";
import EditFormSkeleton from "@/components/EditFormSkeleton";

export default function EditProduct() {
  const { actionState } = useProducts();
  const response = useProduct();

  if (!response.isLoaded) {
    return <EditFormSkeleton />;
  }

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  return (
    <ProductForm
      data={response.data}
      action={actionState.dispatchEdit}
      message={actionState.messageEdit}
    />
  );
}
