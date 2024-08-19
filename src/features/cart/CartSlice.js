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
      const pizza = state.cart.find((item) => {
        return item.pizzaId === action.payload;
      });
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const pizza = state.cart.find((item) => {
        return item.pizzaId === action.payload;
      });
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;

      if(pizza.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state,action)
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getQuantity = (id) => {
  return state => state.cart.cart.find((item) => item.pizzaId === id)?.quantity
}


export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer;
