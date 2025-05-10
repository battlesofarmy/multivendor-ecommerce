// wishlist.js
import { createSlice, createAction } from "@reduxjs/toolkit";

// Actions
export const addToWishlist = createAction("wishlist/addToWishlist");
export const removeFromWishlist = createAction("wishlist/removeFromWishlist");

const initialState = {
  wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist, (state, action) => {
        const item = action.payload;
        const isItemExist = state.wishlist.find((i) => i._id === item._id);
        if (isItemExist) {
          state.wishlist = state.wishlist.map((i) =>
            i._id === isItemExist._id ? item : i
          );
        } else {
          state.wishlist.push(item);
        }
      })
      .addCase(removeFromWishlist, (state, action) => {
        state.wishlist = state.wishlist.filter(
          (item) => item._id !== action.payload
        );
      });
  },
});

// 👇 Add this export to make actions available in other files
export default wishlistSlice.reducer;



// import { createSlice, createAction } from "@reduxjs/toolkit";

// // Action
// export const addToWishlist = createAction("wishlist/addToWishlist");

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
//     builder.addCase(addToWishlist, (state, action) => {
//       const item = action.payload;
//       // const isItemExist = state.wishlist.find((i) => i._id === item._id);
//       // if (isItemExist) {
//       //   state.wishlist = state.wishlist.map((i) =>
//       //     i._id === isItemExist._id ? item : i
//       //   );
//       // } else {
//       //   state.wishlist.push(item);
//       // }
//       state.wishlist.push(item);

//       // Optional: Save to localStorage
//       // localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
//     });
//   },
// });

// export default wishlistSlice.reducer;

// export const wishlistReducer = createReducer(initialState, (builder) => {
//   builder
//     // Add item to wishlist
//     .addCase("addToWishlist", (state, action) => {
//       const item = action.payload;
//       const isItemExist = state.wishlist.find((i) => i._id === item._id);
//       if (isItemExist) {
//         state.wishlist = state.wishlist.map((i) =>
//           i._id === isItemExist._id ? item : i
//         );
//       } else {
//         state.wishlist.push(item);
//       }
//     })

//     // Remove item from wishlist
//     .addCase("removeFromWishlist", (state, action) => {
//       state.wishlist = state.wishlist.filter((i) => i._id !== action.payload);
//     });
// });
