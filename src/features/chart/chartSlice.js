import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import chartService from "./chartService";

const initialState = {
  invoices: [],
  isLoading: false,
};

export const chartSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingMalls.fulfilled, (state, action) => {
        state.invoices = action.payload;
        state.isLoading = false;
      })
      .addCase(getShoppingMalls.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const getShoppingMalls = createAsyncThunk(
  "invoices/getShoppingMalls",
  async () => {
    try {
      return await chartService.getShoppingMalls();
    } catch (error) {
      console.error(error);
    }
  }
);

export default chartSlice.reducer;
