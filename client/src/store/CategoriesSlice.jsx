import { createSlice } from "@reduxjs/toolkit";

const CategoriesSlices = createSlice({
  name: "categoriesSlice",
  initialState: {
    categories: [],
  },
  reducers: {
    changeCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { changeCategories } = CategoriesSlices.actions;
export default CategoriesSlices.reducer;
