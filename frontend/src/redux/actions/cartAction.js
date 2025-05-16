import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axiosCongif";

export const addToWishlistThunk = (data) => async (dispatch, getState) => {
  dispatch(addToCart(data));
  return data;
};