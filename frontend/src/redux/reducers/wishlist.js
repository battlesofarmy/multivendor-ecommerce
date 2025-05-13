// import { createSlice, createAction } from "@reduxjs/toolkit";

// // Actions
// export const addToWishlist = createAction("wishlist/addToWishlist");
// export const removeFromWishlist = createAction("wishlist/removeFromWishlist");

// const initialState = {
//   wishlist: localStorage.getItem("wishlist")
//     ? JSON.parse(localStorage.getItem("wishlist"))
//     : [],
// };

// const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addToWishlist, (state, action) => {
//         const item = action.payload;
//         const isItemExist = state.wishlist.find((i) => i._id === item._id);
//         if (isItemExist) {
//           state.wishlist = state.wishlist.map((i) =>
//             i._id === isItemExist._id ? item : i
//           );
//         } else {
//           state.wishlist.push(item);
//         }
//       })
//       .addCase(removeFromWishlist, (state, action) => {
//         state.wishlist = state.wishlist.filter(
//           (item) => item._id !== action.payload
//         );
//       });
//   },
// });

// // 👇 Add this export to make actions available in other files
// export default wishlistSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i._id === item._id);
      if (isItemExist) {
        state.wishlist = state.wishlist.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        state.wishlist.push(item);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});


export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
