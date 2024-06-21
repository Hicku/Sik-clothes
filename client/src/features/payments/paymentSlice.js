import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentService from "./paymentService";

const initialState = {
  payments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Make payment

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

// Add card

export const addCard = createAsyncThunk(
  "payments/addCard",
  async (userId, thunkAPI) => {
    try {
      return await paymentService.addCard(userId);
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
      .addCase(makePayment.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.payments = payload;
      })
      .addCase(makePayment.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(addCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.payments = payload;
      })
      .addCase(addCard.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      });
  },
});

export const { reset } = paymentSlice.actions;
export default paymentSlice.reducer;
