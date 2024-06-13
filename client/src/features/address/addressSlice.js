import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addressService from "./addressService";

const initialState = {
  addresses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Add address
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (address, thunkAPI) => {
    try {
      return await addressService.addAddress(address);
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

// update address
export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async (id, address, thunkAPI) => {
    try {
      return await addressService.updateAddress(address, id);
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

// Adelete address
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (id, thunkAPI) => {
    try {
      return await addressService.deleteAddress(id);
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

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //address cases
      .addCase(updateAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Address updated successfully!";
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Address deleted successfully!";
        state.addresses.filter((address) => address.id !== action.payload);
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Address added successfully!";
        state.addresses.push(action.payload);
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = addressSlice.actions;
export default addressSlice.reducer;
