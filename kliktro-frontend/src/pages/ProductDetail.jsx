import ProductDetailContainer from "../components/ProductDetailContainer";
import ProductDetailSkeleton from "@/components/ProductDetailSkeleton";
import useProduct from "../hooks/useProduct";
import AsyncError from "../components/AsyncError";

export default function ProductDetail() {
  const response = useProduct();

  if (!response.isLoaded) {
    return <ProductDetailSkeleton />;
  }

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  return <ProductDetailContainer data={response.data} />;
}
