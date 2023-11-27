import { createSlice } from "@reduxjs/toolkit";

//create slice takes a configuration
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  //state is initial state and action is the quantity added
  reducers: {
    addItem: (state, action) => {
      //mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

console.log(cartSlice);
//cartSlice is an object that consists actions and reducer

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
