// wishlistActions.js
import { addToWishlist, removeFromWishlist } from "../reducers/wishlist";

// Add to wishlist
export const addToWishlistThunk = (data) => async (dispatch, getState) => {
  dispatch(addToWishlist(data));
  localStorage.setItem(
    "wishlist",
    JSON.stringify(getState().wishlist.wishlist)
  ); 
  return data;
}; 

// Remove from wishlist
export const removeFromWishlistThunk = (_id) => async (dispatch, getState) => {
  dispatch(removeFromWishlist(_id));
  localStorage.setItem(
    "wishlist",
    JSON.stringify(getState().wishlist.wishlist)
  );
  return _id; 
};
