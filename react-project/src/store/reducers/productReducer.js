import { createSlice } from "@reduxjs/toolkit";
import {
  fetchGetProducts,
  fetchSearchProducts,
  fetcProductsById,
  fetchGetProductsByFilter,
} from "./thunks/productThunk";
import { statusEnum } from "./type/statusEnum";

const initialState = {
  products: [],
  status: statusEnum.noStatus,
  errorMessage: "",
  nameProduct: ""
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ! Get Products
    builder.addCase(fetchGetProducts.pending, (state) => {
      state.products = [];
      state.status = statusEnum.loading;
    });
    builder.addCase(fetchGetProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.status = statusEnum.success;
    });
    builder.addCase(fetchGetProducts.rejected, (state, { payload }) => {
      state.products = [];
      state.status = statusEnum.error;
      state.errorMessage = payload;
    });

    //! Get Product by Id
    builder.addCase(fetcProductsById.pending, (state) => {
      state.products = [];
      state.status = statusEnum.loading;
    });
    builder.addCase(fetcProductsById.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.status = statusEnum.success;
    });
    builder.addCase(fetcProductsById.rejected, (state, { payload }) => {
      state.products = [];
      state.status = statusEnum.error;
      state.errorMessage = payload;
    });

    //! Get Product by Search
    builder.addCase(fetchSearchProducts.pending, (state) => {
      state.products = [];
      state.status = statusEnum.loading;
    });
    builder.addCase(fetchSearchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.status = statusEnum.success;
    });
    builder.addCase(fetchSearchProducts.rejected, (state, { payload }) => {
      state.products = [];
      state.status = statusEnum.error;
      state.errorMessage = payload;
    });
    //! Get Product by Filter
    builder.addCase(fetchGetProductsByFilter.pending, (state) => {
      state.products = [];
      state.status = statusEnum.loading;
    });
    builder.addCase(
      fetchGetProductsByFilter.fulfilled,
      (state, { payload }) => {
        state.products = payload;
        state.status = statusEnum.success;
      }
    );
    builder.addCase(fetchGetProductsByFilter.rejected, (state, { payload }) => {
      state.products = [];
      state.status = statusEnum.error;
      state.errorMessage = payload;
    });
  },
});

export const {} = productReducer.actions;

export default productReducer.reducer;
