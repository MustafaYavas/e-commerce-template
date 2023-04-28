import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import sideDrawerSlice from './sideDrawerSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    drawer: sideDrawerSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
