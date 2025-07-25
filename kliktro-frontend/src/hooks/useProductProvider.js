import { useState, useEffect, useActionState } from "react";
import { useNavigate, useParams } from "react-router";
import API from "../api";

// This custom hook used by /src/providers/AsyncProductProvider.jsx
const useProductProvider = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  const getData = async (productId) => {
    const { data, status } = await API.get(`/products/${productId}`);

    if (status === 404) {
      throw new Error("Product is not found.");
    }

    if (status !== 200) {
      throw new Error("Failed to load product data.");
    }

    return data;
  };

  useEffect(() => {
    getData(id)
      .then((data) => {
        setData(data);
        setIsError(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setData(null);
        setIsError(true);
        setErrorMessage(error.toString());
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, [id]);

  return { data, isError, errorMessage, isLoaded };
};

export default useProductProvider;
