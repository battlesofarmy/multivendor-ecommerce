import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";


// import { authStore } from "./reducers/authStore";
import authStore from './reducers/authStore'; // ✅ Correct

import myCounterSlice  from './myCounterSlice';


 
const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
    auth: authStore,
    myCounter: myCounterSlice
  },
});

export default Store;
