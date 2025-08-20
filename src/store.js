import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartRuducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartRuducer,
  },
});

export default store;
