import useProducts from "../hooks/useProducts";
import useProduct from "../hooks/useProduct";
import ProductForm from "../components/ProductForm";
import Spinner from "../components/Spinner";
import AsyncError from "../components/AsyncError";

// FIXME: Not Found Error has't been handled properly
export default function EditProduct() {
  const { actionState } = useProducts();
  const response = useProduct();

  if (!response.isLoaded) {
    return <Spinner />;
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
