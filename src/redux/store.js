import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './feature-slices/cart-slice';

export const store = configureStore({
	reducer: {
		cartStore: cartSlice
	}
});