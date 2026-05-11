import { createSlice } from "@reduxjs/toolkit";

const foodToCart = createSlice({
  name: "addCart",
  initialState: {
    addedFoods: []
  },

  

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // check if item already exists
      const existingItem = state.addedFoods.find(
        food => food.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.addedFoods.push({
          ...item,
          quantity: 1
        });
      }
    },

    removeFromCart: (state, action) => {
      state.addedFoods = state.addedFoods.filter(
        food => food.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.addedFoods.find(
        food => food.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.addedFoods.find(
        food => food.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.addedFoods = [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = foodToCart.actions;

export default foodToCart.reducer;