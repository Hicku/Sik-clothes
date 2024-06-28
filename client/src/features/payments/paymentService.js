import axios from "axios";

const API_URL = "/api/payments/";

const makePayment = async () => {
  const response = await axios.post(API_URL);

  return response.data;
};

const addCard = async (userId) => {
  const response = await axios.post(`${API_URL}/addCard/${userId}`);

  return response.data;
};

const createCustomer = async (userData) => {
  const response = await axios.post(`${API_URL}/createCustomer`, userData);
  return response.data;
};

const productService = {
  makePayment,
  addCard,
  createCustomer,
};

export default productService;
