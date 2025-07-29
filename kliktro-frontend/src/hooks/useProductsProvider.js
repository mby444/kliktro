import { useState, useEffect, useActionState } from "react";
import { useNavigate, useParams } from "react-router";
import API from "../api";
import { validator, fixer } from "../utils/productForm";

// This custom hook used by /src/providers/AsyncProductsProvider.jsx
// TODO: data state should be renamed to products
const useProductsProvider = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const excludeProduct = (id) => {
    return data.filter((product) => product.id !== id);
  };

  const getUpdatedProductList = (updatedProduct) => {
    return data.map((d) => {
      if (d.id === updatedProduct.id) {
        return updatedProduct;
      }
      return d;
    });
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

  const addProduct = async (product) => {
    try {
      setIsLoaded(false);

      const { data: newData, status } = await API.post(`/products`, product);

      if (status !== 201) {
        console.log(status);
        throw new Error("Failed to add product.");
      }

      const newProductList = [...data, newData];

      setData(newProductList);
      setIsError(false);
      setErrorMessage("");
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.toString());
    } finally {
      setIsLoaded(true);
    }
  };

  const updateProduct = async (product) => {
    try {
      setIsLoaded(false);

      const { data, status } = await API.put(
        `/products/${product.id}`,
        product
      );

      if (status !== 200) {
        throw new Error("Failed to update product.");
      }

      const newProductList = getUpdatedProductList(data);

      setData(newProductList);
      setIsError(false);
      setErrorMessage("");
    } catch (error) {
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

  const validateInput = (d, { hasId = false }) => {
    if (hasId) {
      validator.validId(d);
    }
    validator.noEmptyField(d);
    validator.validPrice(d);
    validator.validStock(d);
    return fixer.fix(d);
  };

  const actionAdd = async (prevState, formData) => {
    "use server";

    const inputData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      stock: formData.get("stock"),
      image_url: formData.get("image_url"),
      category: formData.get("category"),
    };

    try {
      const validated = validateInput(inputData, { hasId: false });
      await addProduct(validated);
      navigate("/admin");
    } catch (error) {
      console.error(error);
      return error.toString();
    }
  };

  const actionEdit = async (prevState, formData) => {
    "use server";

    const inputData = {
      id: formData.get("id"),
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      stock: formData.get("stock"),
      image_url: formData.get("image_url"),
      category: formData.get("category"),
    };

    try {
      const validated = validateInput(inputData, { hasId: true });
      await updateProduct(validated);
      navigate("/admin");
    } catch (error) {
      console.error(error);
      return error.toString();
    }
  };

  const [messageAdd, dispatchAdd] = useActionState(actionAdd, null);
  const [messageEdit, dispatchEdit] = useActionState(actionEdit, null);

  useEffect(() => {
    getProducts();
  }, []);

  return {
    data,
    isError,
    errorMessage,
    isLoaded,
    actionState: { messageAdd, messageEdit, dispatchAdd, dispatchEdit },
    removeProduct,
  };
};

export default useProductsProvider;
