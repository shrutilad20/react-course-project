// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store; // ✅ Use default export
