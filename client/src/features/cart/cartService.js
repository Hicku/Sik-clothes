import axios from "axios";

const API_URL = "/api/cart/";

const addToCart = async (productId, userId, quantity, price, size) => {
  const response = await axios.post(`${API_URL}${userId}`, {
    productId,
    quantity,
    price,
    size,
  });
  return response.data;
};

const cartService = {
  addToCart,
};

export default cartService;
