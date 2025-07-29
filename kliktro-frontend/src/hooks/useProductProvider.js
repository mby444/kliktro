import { useState, useEffect, useActionState } from "react";
import { useParams } from "react-router";
import API from "../api";

// This custom hook used by /src/providers/AsyncProductProvider.jsx
const useProductProvider = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  const getData = async (productId) => {
    try {
      setIsLoaded(false);
      const { data, status } = await API.get(`/products/${productId}`);

      if (status !== 200) {
        throw new Error("Failed to load product data.");
      }

      setData(data);
      setIsError(false);
      setErrorMessage("");
      return data;
    } catch (error) {
      setData(null);
      setIsError(true);
      setErrorMessage(
        error.status === 404 ? "Product is not found." : error.message
      );
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return { data, isError, errorMessage, isLoaded };
};

export default useProductProvider;
