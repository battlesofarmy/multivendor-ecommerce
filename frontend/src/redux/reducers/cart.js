import { createAction, createReducer } from "@reduxjs/toolkit";

export const addToCart = createAction("addToCart");
export const removeFromCart = createAction("removeFromCart");

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i._id === item._id);

      if (isItemExist) {
        state.cart = state.cart.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        state.cart.push(item);
      }
    })
    .addCase(removeFromCart, (state, action) => {
      state.cart = state.cart.filter((i) => i._id !== action.payload);
    });
});





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
