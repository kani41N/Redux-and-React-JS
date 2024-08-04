import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlices";

export const store = configureStore({
    devTools: false,
  reducer:{
    customers: customerReducer,


  }
})  