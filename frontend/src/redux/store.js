import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { orderReducer } from "./reducers/order";


import authReducer from './reducers/authSlice'; // ✅ Correct
import wishlistSlice from "./reducers/wishlist";


 
const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistSlice,
    order: orderReducer,
    auth: authReducer,
  },
});

export default Store;
