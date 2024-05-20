import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory } from "../../../api/category";

export const fetchGetCategory = createAsyncThunk(
  "category/fetchGetCategory",
  async (_,{rejectWithValue}) => {
    try {
      const result = await getCategory();

      return result;
    } catch (error) {
      return rejectWithValue("Failed in fetch products");
    }
  }
);

