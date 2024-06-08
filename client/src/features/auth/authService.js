import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Lougout user
const logout = () => {
  localStorage.removeItem("user");
};

// update User
const updateUser = async (userData) => {
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const token = localStorage.getItem("token");

  const response = await axios.put(API_URL + userId, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  updateUser,
};

export default authService;
