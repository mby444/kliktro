import { useState, useEffect, useActionState } from "react";
import { useNavigate, useParams } from "react-router";
import API from "../api";

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

  const updateProduct = async (product) => {
    try {
      setIsLoaded(false);

      const { data: d, status } = await API.put(
        `/products/${product.id}`,
        product
      );

      if (status !== 200 || status !== 201) {
        throw new Error("Failed to update product.");
      }

      const updatedData = getUpdatedProductList(product);

      // setData(data);
      // setIsError(false);
      // setErrorMessage("");
    } catch (error) {
      // setData(null);
      // setIsError(true);
      // setErrorMessage(error.toString());
    } finally {
      // setIsLoaded(true);
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

  const validateInput = (d) => {
    // TODO: Move validator and fixer object into sparate file.
    const validator = {
      noEmptyField: () => {
        const isAllFilled =
          d.name.trim() &&
          d.description.trim() &&
          d.price.trim() &&
          d.stock.trim() &&
          d.image_url.trim() &&
          d.categories.trim();

        if (!isAllFilled) {
          throw new Error("All fields are required.");
        }
      },
      validPrice: () => {
        const reg = /^\d+$/;
        const isDigitOnly = reg.test(d.price);

        if (!isDigitOnly) {
          throw new Error("Price must be numeric.");
        }

        const isValidRange = parseInt(d.price) >= 1000;

        if (!isValidRange) {
          throw new Error("Price can't be less than Rp 1000.");
        }
      },
      validStock: () => {
        const reg = /^\d+$/;
        const isDigitOnly = reg.test(d.stock);

        if (!isDigitOnly) {
          throw new Error("Stock must be numeric.");
        }

        const isValidRange = parseInt(d.stock) >= 0;

        if (!isValidRange) {
          throw new Error("Stock can't be less than 0.");
        }
      },
    };

    const fixer = {
      fix: () => {
        return {
          ...d,
          price: parseInt(d.price),
          stock: parseInt(d.stock),
        };
      },
    };

    validator.noEmptyField();
    validator.validPrice();
    validator.validStock();
    const validated = fixer.fix();

    return validated;
  };

  const actionEdit = async (prevState, formData) => {
    "use server";

    const inputData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      stock: formData.get("stock"),
      image_url: formData.get("image_url"),
      categories: formData.get("categories"),
    };

    try {
      const validated = validateInput(inputData);
      console.log(validated);
      const redirectPath = "/admin";

      // navigate(redirectPath);
    } catch (error) {
      console.log(error);
      return error.toString();
    }
  };

  const [messageEdit, dispatchEdit] = useActionState(actionEdit, null);

  useEffect(() => {
    getProducts();
  }, []);

  return {
    data,
    isError,
    errorMessage,
    isLoaded,
    actionState: { messageEdit, dispatchEdit },
    removeProduct,
  };
};

export default useProductsProvider;
