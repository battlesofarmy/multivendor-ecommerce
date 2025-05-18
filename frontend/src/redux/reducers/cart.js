import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axiosCongif";


// Async thunk to fetch cart data
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await api.get("/cart");
  return response.data;
});

const initialState = {
   cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{
    addToCart: (state, action)=>{
      const item = action.payload;
      state.cart.push(item);
      // console.log(item)
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchCart.fulfilled, (state, action) => {
  //     state.cart = action.payload;
  //   });
  // }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;