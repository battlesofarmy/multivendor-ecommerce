import api from "../../utils/axiosCongif";
import { addToCart } from "../reducers/cart";

// fetch cart from server
export const fetchCartThunk = () => async (dispatch) => {
  try {
    const response = await api.get("/cart");
    dispatch(addToCart(response.data));
    console.log("muntasir")
  } catch (error) {
    console.error("Failed to fetch cart:", error);
  }
};
 
// add item to store & maybe backend
export const addToCartThunk = (data) => async (dispatch, getState) => {
  dispatch(addToCart(data));
  // optionally send to backend
  // try {
  //   console.log("Hello cart");
  //   await api.post("/cart", data);
  // } catch (error) {
  //   console.error("Failed to sync cart:", error);
  // }
  return data;
};
