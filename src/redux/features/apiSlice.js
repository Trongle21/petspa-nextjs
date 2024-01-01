import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  originalProducts: [],
  loading: true,
  error: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    getDataSuccess(state, action) {
      state.products = action.payload;
      state.originalProducts = action.payload;
      state.loading = false;
    },
    getDataFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    filterProductsBySearch(state, action) {
      const filterProducts = state.originalProducts.filter((product) =>
        product.description
          .toLowerCase()
          .includes(action.payload.name.toLowerCase())
      );
      state.products = [...filterProducts];
    },
    filterProductsBySelect(state, action) {
      let filterProducts;
      if (action.payload === "cat and dog") {
        filterProducts = state.originalProducts;
      } else if (action.payload === "cat") {
        filterProducts = state.originalProducts.filter((product) =>
          product.type.includes("cat")
        );
      } else if (action.payload === "dog") {
        filterProducts = state.originalProducts.filter((product) =>
          product.type.includes("dog")
        );
      }
      state.products = [...filterProducts];
    },
  },
});

export const {
  getDataSuccess,
  getDataFailed,
  filterProductsBySearch,
  filterProductsBySelect,
} = apiSlice.actions;
export default apiSlice;
