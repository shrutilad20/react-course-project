// src/redux/cartslice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },

    increase: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },

    decrease: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= item.price;
      }
    },

    removeItem: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.quantity * item.price;
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const { addToCart, increase, decrease, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
