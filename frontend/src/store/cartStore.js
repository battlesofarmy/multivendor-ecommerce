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

  setCart: (cart) => set({ cart }),
}));

export default useCartStore;
