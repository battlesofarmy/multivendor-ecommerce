// add to cart
export const addTocart = (data) => async (dispatch, getState) => {
  dispatch({
    type: "addToCart",
    payload: data,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};
// remove from cart
export const removeFromCart = (data) => async (dispatch, getState) => {
  dispatch({
    type: "removeFromCart",
    payload: data._id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: JSON.parse(localStorage.getItem("cartItems")) || [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//       localStorage.setItem("cartItems", JSON.stringify(state.cart));
//     },
//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter((item) => item._id !== action.payload);
//       localStorage.setItem("cartItems", JSON.stringify(state.cart));
//     },
//     clearCart: (state) => {
//       state.cart = [];
//       localStorage.setItem("cartItems", JSON.stringify([]));
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
