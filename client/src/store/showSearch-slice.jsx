import { createSlice } from "@reduxjs/toolkit";

const showSearchSlice = createSlice({
  name: "showSearch",
  initialState: {
    showSearch: false,
  },
  reducers: {
    changeShowSearchValue(state, action) {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { changeShowSearchValue } = showSearchSlice.actions;
export default showSearchSlice.reducer;
