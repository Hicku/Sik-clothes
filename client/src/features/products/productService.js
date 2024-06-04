import axios from "axios";

const API_URL = "/api/products/";

const getProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getCategory = async (category) => {
  const response = await axios.get(`${API_URL}/category?category=${category}`);

  return response.data;
};

const productService = {
  getProducts,
  getCategory,
};

export default productService;
