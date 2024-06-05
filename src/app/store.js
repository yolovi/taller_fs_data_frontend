import { configureStore } from "@reduxjs/toolkit";
import invoices from "../features/chart/chartSlice";

export const store = configureStore({
  reducer: {
    invoices,
  },
});
