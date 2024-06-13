import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
import addressReducer from "../features/address/addressSlice";

const store = configureStore({
  reducer: {
    address: addressReducer,
    auth: authReducer,
    product: productReducer,
  },
});

export default store;
