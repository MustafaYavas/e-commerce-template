import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CartProduct } from '@/helpers/types';

export interface CartState {
  items: CartProduct[];
  itemTypeCount: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  itemTypeCount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<{ product: CartProduct }>) => {
      const product = action.payload.product;
      const { id, quantity } = product;
      let hasCartSameItem = false;

      if (state.items.length === 0) {
        state.items.push(product);
        state.itemTypeCount = 1;
      } else {
        state.items.map((item) => {
          if (item.id === product.id) {
            hasCartSameItem = true;
            return;
          }
        });
        if (hasCartSameItem) {
          state.items.map((item) => {
            if (item.id === id)
              return {
                ...item,
                quantity: quantity,
              };
            return item;
          });
        } else {
          state.items.push(product);
          state.itemTypeCount = state.itemTypeCount + 1;
        }
      }

      state.total = 0;
      state.items.map((item) => {
        state.total += item.price * item.quantity;
      });
    },

    setAllItemsToCart: (
      state,
      action: PayloadAction<{ products: CartProduct[]; count: number }>
    ) => {
      const { products, count } = action.payload;
      state.items = products;
      state.itemTypeCount = count;
      for (let i = 0; i < state.items.length; i++) {
        state.total += state.items[i].price * state.items[i].quantity!;
      }
    },

    updateItem: (
      state,
      action: PayloadAction<{ product: CartProduct; quantity: string }>
    ) => {
      const { product, quantity } = action.payload;

      const newItems = state.items.map((item) => {
        if (item.id === product.id)
          return {
            ...item,
            quantity: parseInt(quantity),
          };
        return item;
      });
      state.items = newItems;
      state.total = 0;
      state.items.map((item) => {
        state.total += item.price * item.quantity;
      });
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.items.map((item, i) => {
        if (item.id === id) state.items.splice(i, 1);
      });
      state.itemTypeCount -= 1;
      state.total = 0;
      state.items.map((item) => {
        state.total += item.price * item.quantity;
      });
    },

    clearCart: (state) => {
      state.items = [];
      state.itemTypeCount = 0;
      state.total = 0;
    },
  },
});

export const {
  addItemToCart,
  setAllItemsToCart,
  updateItem,
  removeItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
