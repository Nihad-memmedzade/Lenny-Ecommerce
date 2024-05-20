import { createAsyncThunk } from "@reduxjs/toolkit";
import {getProducts, getProductBySearch,getProductsById,getProductByFilter} from "..//..//..//api/products"

export const fetchGetProducts = createAsyncThunk(
  "product/fetchGetProducts",
  async (queyParam, { rejectWithValue }) => {
    try {
      const result = await getProducts(queyParam);

      return result;
    } catch (error) {
      return rejectWithValue("Failed in fetch products");
    }
  }
);

export const fetcProductsById = createAsyncThunk(
  "product/fetcProductsById",
  async (id, { rejectWithValue }) => {
    try {
      const result = await getProductsById(id);

      return result;
    } catch (error) {
      return rejectWithValue("Failed in fetch products");
    }
  }
);


export const fetchSearchProducts = createAsyncThunk(
  "product/ fetchSearchProducts",
  async (searchItem, { rejectWithValue }) => {
    try {
      const result = await  getProductBySearch(searchItem);

      return result;
    } catch (error) {
      return rejectWithValue("Failed in fetch products");
    }
  }
);


export const fetchGetProductsByFilter = createAsyncThunk(
  "categories/fetchGetProductsByFilter",
  async (param, { rejectWithValue }) => {
    try {
      const result = await getProductByFilter(param);

      return result;
    } catch (error) {
      return rejectWithValue("Failed in fetch products");
    }
  }
);