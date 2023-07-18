import { createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    pageScroll: false
  },
  reducers: {
    changeScrollValue(state, action) {
      state.pageScroll = action.payload;
    },
  },
});

export const { changeScrollValue } = scrollSlice.actions;
export default scrollSlice.reducer;