import { create } from 'zustand';
import api from '../utils/axiosCongif';

const useCartStore = create((set) => ({
  cart: [],

  // fetch and update cart
  fetchCartFromAPI: async () => {
    try {
      const response = await api.get("/cart");
      set({ cart: response.data });
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  },

  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),

    removedFromCart: async (data) => {
      try {
        await api.delete("/cart", {data});

        set((state) => ({
          cart: state.cart.filter((cartItem) => cartItem.productId !== data.productId)
        }));
      } catch (error) {
        console.error("Failed to remove item from cart:", error);
      }
    },
    increaseCartCount: async(data)=>{
      try{
        await api.post('/cart/increaseCount',data);
         set((state) => ({
          cart: state.cart.map((item) =>
            item.id === data.id ? { ...item, count: item.count + 1 } : item
          )
        }));
      }catch(err){
        console.log("Faild to increase cart item");
      }
    },
    decreaseCartCount: async(data)=>{
      try{
        await api.post('/cart/decreaseCount',data);
         set((state) => ({
          cart: state.cart.map((item) =>
            item.id === data.id ? { ...item, count: item.count - 1 } : item
          )
        }));
      }catch(err){
        console.log("Faild to increase cart item");
      }
    },


  setCart: (cart) => set({ cart }),
}));

export default useCartStore;
