import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "./thunks/authThunk";
import { statusEnum } from "./type/statusEnum";

const initialState = {
  token: "",
  user: {},
  status: statusEnum.noStatus,
  errorMessage: "",
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutFn: (state) => {
      state.token = "";
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    // ! Login
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = statusEnum.loading;
      state.token = "";
      state.user = {};
    });
    builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
      state.status = statusEnum.success;
      state.token = payload?.jwt;
      state.user = payload?.user;
    });
    builder.addCase(fetchLogin.rejected, (state, { payload }) => {
      state.status = statusEnum.error;
      state.token = "";
      state.user = {};
      state.errorMessage = payload;
    });
  },
});

export const {logOutFn} = authReducer.actions;

export default authReducer.reducer;
