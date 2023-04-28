import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SideDrawerState {
  isOpen: boolean;
}

const initialState: SideDrawerState = {
  isOpen: false,
};

const sideDrawerSlice = createSlice({
  name: 'SideDrawer',
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },

    closeDrawer: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDrawer, closeDrawer } = sideDrawerSlice.actions;
export default sideDrawerSlice.reducer;
