import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../../api/auth";




export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params, { rejectWithValue }) => {
    try {
      const result = await register(params);

      return result;
    } catch (error) {
      return rejectWithValue("Failed in register");
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (params, { rejectWithValue }) => {
    try {
      const result = await login(params);

      return result;
    } catch (error) {
      return rejectWithValue("Failed in login");
    }
  }
);

