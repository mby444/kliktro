import { useState, useEffect, useActionState } from "react";
import { useParams } from "react-router";
import API from "../api";

// This custom hook used by /src/providers/AsyncProductsProvider.jsx
// TODO: data state should be renamed to products
const useProductsProvider = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const excludeProduct = (id) => {
    return data.filter((product) => product.id !== id);
  };

  const getProducts = async () => {
    try {
      setIsLoaded(false);

      const { data, status } = await API.get("/products");

      if (status !== 200) {
        throw new Error("Failed to load products.");
      }

      setData(data);
      setIsError(false);
      setErrorMessage("");
    } catch (error) {
      setData(null);
      setIsError(true);
      setErrorMessage(error.toString());
    } finally {
      setIsLoaded(true);
    }
  };

  const removeProduct = async (id) => {
    try {
      setIsLoaded(false);

      const { data } = await API.delete(`/products/${id}`);

      if (!data.deleted) {
        throw new Error("Failed to delete product.");
      }

      setData(excludeProduct(id));
      setIsError(false);
      setErrorMessage("");
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.toString());
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { data, isError, errorMessage, isLoaded, removeProduct };
};

export default useProductsProvider;
