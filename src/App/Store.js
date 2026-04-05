import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/ProductSlice"

export const store  = configureStore({
    reducer: {
        product : productReducer, 
    }
})