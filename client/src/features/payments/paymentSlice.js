import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentService from "./paymentService";

const initialState = {
  payments: [],
  customerId: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const makePayment = createAsyncThunk(
  "payments/makePayment",
  async (_, thunkAPI) => {
    try {
      return await paymentService.makePayment();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addCard = createAsyncThunk(
  "payments/addCard",
  async ({ userId, paymentMethodId }, thunkAPI) => {
    try {
      return await paymentService.addCard(userId, paymentMethodId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createCustomer = createAsyncThunk(
  "payments/createCustomer",
  async (userData, thunkAPI) => {
    try {
      return await paymentService.createCustomer(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(makePayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.payments = action.payload;
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.payments = action.payload;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createCustomer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.customerId = action.payload.customerId;
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = paymentSlice.actions;
export default paymentSlice.reducer;
