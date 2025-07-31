import { useState, useEffect, useActionState } from "react";
import { useNavigate, useParams } from "react-router";
import API from "../api";
import { validator, fixer } from "../utils/productForm";

// This custom hook used by /src/providers/AsyncProductsProvider.jsx
const useProductsProvider = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
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

      const { data: newData, status } = await API.post(`/products`, product, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (status !== 201) {
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

      const formData = new FormData();
      // Append request method
      formData.append("_method", "PUT");
      // Append product
      Object.keys(product).forEach((key) => {
        formData.append(key, product[key]);
      });

      const { data, status } = await API.post(
        `/products/${product.id}`,
        product,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (status !== 200) {
        throw new Error("Failed to update product.");
      }

      const newProductList = getUpdatedProductList(data);

      setData(newProductList);
      setIsError(false);
      setErrorMessage("");
    } catch (error) {
      console.log(error);
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
    } else {
      validator.validImage(d);
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
      image: formData.get("image"),
      category: formData.get("category"),
    };

    try {
      const validated = validateInput(inputData, { hasId: false });
      await addProduct(validated);
      return {
        isInitial: false,
        success: true,
        inputData,
        message: "",
      };
    } catch (error) {
      console.error(error);
      return {
        isInitial: false,
        success: false,
        inputData,
        message: error.message,
      };
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
      image: formData.get("image"),
      category: formData.get("category"),
    };

    try {
      const validated = validateInput(inputData, { hasId: true });
      await updateProduct(validated);
      return {
        isInitial: false,
        success: true,
        inputData,
        message: "",
      };
    } catch (error) {
      console.error(error);
      return {
        isInitial: false,
        success: false,
        inputData,
        message: error.message,
      };
    }
  };

  const initialInputData = {
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category: "",
  };
  const initialState = {
    isInitial: true,
    success: false,
    inputData: initialInputData,
    message: "",
  };
  const [stateAdd, dispatchAdd] = useActionState(actionAdd, initialState);
  const [stateEdit, dispatchEdit] = useActionState(actionEdit, initialState);

  useEffect(() => {
    getProducts();
  }, []);

  return {
    data,
    isError,
    errorMessage,
    isLoaded,
    stateAdd,
    stateEdit,
    dispatchAdd,
    dispatchEdit,
    removeProduct,
    // actionState: { messageAdd, messageEdit, dispatchAdd, dispatchEdit },
  };
};

export default useProductsProvider;
