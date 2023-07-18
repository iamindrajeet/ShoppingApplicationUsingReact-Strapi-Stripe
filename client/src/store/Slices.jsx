import { createSlice } from "@reduxjs/toolkit";

const Slices = createSlice({
  name: "slices",
  initialState: {
    pageScroll: false,
    showCart: false,
    showSearch: false,
  },
  reducers: {
    changeScrollValue(state, action) {
      state.pageScroll = action.payload;
    },
    changeShowSearchValue(state, action) {
      state.showSearch = action.payload;
    },
    changeShowCartValue(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { changeScrollValue, changeShowCartValue, changeShowSearchValue } = Slices.actions;
export default Slices.reducer;
