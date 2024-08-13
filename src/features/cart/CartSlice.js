import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => {
        return item.pizzaId !== action.payload;
      });
    },
    increaseItemQuantity(state, action) {
      const pizza = state.filter((item) => {
        item.pizzaId === action.payload;
      });
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const pizza = state.filter((item) => {
        item.pizzaId === action.payload;
      });
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});


export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer;
