import { configureStore } from "@reduxjs/toolkit";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { orderReducer } from "./reducers/order";

import authReducer from './reducers/authSlice'; 
import wishlistSlice from "./reducers/wishlist";
import userReducer from "./reducers/user";
import cartReducer from "./reducers/cart";

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
