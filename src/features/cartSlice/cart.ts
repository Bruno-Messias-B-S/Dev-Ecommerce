import { createSlice } from "@reduxjs/toolkit";
import { Product } from '../../types/Product';

interface CartState {
    cartItems: Array<Product>,
    cartItemsQtd: number,
    totalValue: number
}

const initialState: CartState = {
    cartItems: [],
    cartItemsQtd: 0,
    totalValue: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart (state, action) {
            const itemIndex = state.cartItems.find((item) => item.id === action.payload.id);

            if (itemIndex) {
                itemIndex.amount++
            } else {
                state.cartItems.push({...action.payload, amount: 1})
            }

            state.cartItemsQtd++
        },
        
        increase(state, action) {
            const itemIndex = state.cartItems.find((item) => item.id === action.payload.id);

            if (itemIndex) {
                itemIndex.amount++;
            }
        },

        decrease(state, action) {
            const itemIndex = state.cartItems.find((item) => item.id === action.payload.id);

            if (itemIndex) {
                if(itemIndex.amount <= 1) {
                    itemIndex.amount = 1;
                } else {
                    itemIndex.amount--
                }
            }
        },

        removeItem (state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            state.cartItemsQtd = state.cartItems.length
        },

        getTotals(state) {
            const allValues = state.cartItems.reduce((total, item) => Number(total) + Number(item.price) * (item.amount), 0)
            state.totalValue = allValues
        }
    }
});

export const { addToCart, increase, decrease, removeItem, getTotals } = cartSlice.actions;