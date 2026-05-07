import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    
    initialState: { 
        cart: localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
    },

    reducers: {
        appendCart: (state, payload) => {
            state.cart = [
                ...state.cart,
                payload.payload
            ];

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        
        removeCart: (state, payload) => {
            state.cart = state.cart.filter(
                (el) => el?.id !== payload?.payload
            );

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        
        changeQuantity: (state, payload) => {
            
            state.cart = state.cart.map(
                (el) => el?.id === payload?.payload?.productId
                ? ({ ...el, quantity: payload?.payload?.updatedQuantity })
                : el
            );

            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
});

export const {
    // method(s) | function(s)
    appendCart,
    removeCart,
    changeQuantity
} = cartSlice.actions;

export default cartSlice.reducer;