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

// update address
const updateAddress = async (addressId, address) => {
  const token = localStorage.getItem("token");

  const response = await axios.put(API_URL + addressId, address, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// delete address
const deleteAddress = async (addressId) => {
  const token = localStorage.getItem("token");

  const response = await axios.delete(API_URL + addressId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

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
  updateAddress,
  deleteAddress,
  getAllAddresses,
};

export default addressService;
