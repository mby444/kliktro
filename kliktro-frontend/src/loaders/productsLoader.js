import API from "../api";

const productsLoader = async () => {
  try {
    const response = await API.get("/products");
    return {
      success: true,
      products: response.data,
    };
  } catch (error) {
    console.error("Error fetching /products:", error);
    return {
      success: false,
      products: [],
    };
  }
};

export default productsLoader;
