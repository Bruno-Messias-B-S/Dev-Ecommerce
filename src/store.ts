import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./features/cartSlice/cart"
import { modalSlice } from "./features/modalSlice/modal"

export const store = configureStore({
    reducer: {
      cartItems: cartSlice.reducer,
      modalSlice: modalSlice.reducer
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  
  export type AppDispatch = typeof store.dispatch