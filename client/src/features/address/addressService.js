import axios from "axios";

const API_URL = "/api/address/";

// addAddress
const addAddress = async (address) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, address, config);

  return response.data;
};

const updateAddress = async (address) => {
  const response = await axios.put(API_URL + address.id, address);

  return response.data;
};

// delete address
const deleteAddress = async (addressId) => {
  const response = await axios.delete(API_URL + addressId, {});

  return response.data;
};

const getAllAddresses = async (userId) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(API_URL + userId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const addressService = {
  addAddress,
  deleteAddress,
  getAllAddresses,
  updateAddress,
};

export default addressService;
