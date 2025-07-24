import useProduct from "../hooks/useProduct";
import ProductForm from "../components/ProductForm";

export default function EditProduct() {
  const data = useProduct();
  return <ProductForm data={data} action="" />;
}
