import { createSlice } from "@reduxjs/toolkit";
//   <>

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState, // <-- doit correspondre à la constante déclarée
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        //remove Cart 
        removeFromCart: (state, action)=>{
            state.items = state.items.filter((items)=> items.id !== action.payload); 
        }, 

        //update 
        updateQuantity: (state, action) =>{
            const item = state.items.find((item)=> item.id === action.payload.id)
            if(item) {
                item.quantity = action.payload.quantity; 
            }
        }
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;