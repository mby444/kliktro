import useProducts from "../hooks/useProducts";
import Spinner from "../components/Spinner";
import AsyncError from "../components/AsyncError";
import ProductsGridContainer from "../components/ProductsGridContainer";

export default function Products() {
  const response = useProducts();

  if (!response.isLoaded) {
    return <Spinner />;
  }

  if (response.isError) {
    return <AsyncError message={response.errorMessage} />;
  }

  return <ProductsGridContainer data={response.data} />;
}
