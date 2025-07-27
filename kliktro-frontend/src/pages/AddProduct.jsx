import useProducts from "../hooks/useProducts";
import ProductForm from "../components/ProductForm";

export default function AddProduct() {
  const { actionState } = useProducts();
  return (
    <ProductForm
      action={actionState.dispatchAdd}
      message={actionState.messageAdd}
    />
  );
}
