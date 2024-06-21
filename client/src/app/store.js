import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
import addressReducer from "../features/address/addressSlice";
import paymentRedcuer from "../features/payments/paymentSlice";

const store = configureStore({
  reducer: {
    address: addressReducer,
    auth: authReducer,
    product: productReducer,
    payment: paymentRedcuer,
  },
});

export default store;
