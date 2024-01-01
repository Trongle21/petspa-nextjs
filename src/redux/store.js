import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./features/apiSlice";
import cartSlice from "./features/cartSlice.js";

const store = configureStore({
  reducer: {
    api: apiReducer.reducer,
    cart: cartSlice.reducer,
  },
});

export { store };
