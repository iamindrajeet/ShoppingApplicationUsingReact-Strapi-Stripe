import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "showCart",
  initialState: {
    showcart: false,
  },
  reducers: {
    changeShowCartValue(state, action) {
      state.showcart = !state.showcart;
    },
  },
});

export const { changeShowCartValue } = showCartSlice.actions;
export default showCartSlice.reducer;
