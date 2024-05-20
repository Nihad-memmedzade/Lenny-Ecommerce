import { createSlice } from "@reduxjs/toolkit";
import { fetchGetCategory } from "./thunks/categoryThunk";
import { statusEnum } from "./type/statusEnum";
const initialState = {
  category: [],
  status: statusEnum.noStatus,
  errorMessage: "",
};

export const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ! Get Category
    builder.addCase(fetchGetCategory.pending, (state) => {
      state.category = [];
      state.status = statusEnum.loading;
    });
    builder.addCase(fetchGetCategory.fulfilled, (state, { payload }) => {
      state.category = payload;
      state.status = statusEnum.success;
    });
    builder.addCase(fetchGetCategory.rejected, (state, { payload }) => {
      state.category = [];
      state.status = statusEnum.error;
      state.errorMessage = payload;
    });
  },
});

export const {} = categoryReducer.actions;

export default categoryReducer.reducer;
