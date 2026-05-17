import { createSlice } from "@reduxjs/toolkit";

const foodToCart = createSlice({
  name: "addCart",

  initialState: {
    addedFoods: [],
    orders: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.addedFoods.find((food) => food.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.addedFoods.push({
          ...item,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.addedFoods = state.addedFoods.filter(
        (food) => food.id !== action.payload,
      );
    },

    increaseQty: (state, action) => {
      const item = state.addedFoods.find((food) => food.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.addedFoods.find((food) => food.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.addedFoods = [];
    },

    placeOrder: (state) => {
      if (state.addedFoods.length > 0) {
        const total = state.addedFoods.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );

        state.orders.push({
          id: Date.now(),
          items: [...state.addedFoods],
          total,
          status: "Preparing",
          date: new Date().toLocaleString(),
        });

        state.addedFoods = [];
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
  placeOrder,
} = foodToCart.actions;

export default foodToCart.reducer;
