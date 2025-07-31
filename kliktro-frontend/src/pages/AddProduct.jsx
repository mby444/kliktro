import useProducts from "@/hooks/useProducts";
import ProductForm from "@/components/ProductForm";

export default function AddProduct() {
  const { stateAdd, dispatchAdd } = useProducts();

  if (stateAdd.success) {
    window.location.href = "/admin";
  }

  return <ProductForm state={stateAdd} action={dispatchAdd} />;
}
