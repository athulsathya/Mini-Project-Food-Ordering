import { configureStore } from "@reduxjs/toolkit";
import foodToCart from './FoodSlice'


export const store = configureStore({
  reducer: {
    cart: foodToCart
  }
});

