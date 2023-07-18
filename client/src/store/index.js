import { configureStore } from '@reduxjs/toolkit';
import SliceReducer from './Slices';
import CategoriesReducer from './CategoriesSlice';

const store = configureStore({
  reducer: {
    slices: SliceReducer,
    categoriesSlice: CategoriesReducer 
  }
});

export default store;
