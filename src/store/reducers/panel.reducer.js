/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    openPanel(state) {
      state.open = true;
    },
    closePanel(state) {
      state.open = false;
    },
  },
});

export const { closePanel, openPanel } = panelSlice.actions;
export default panelSlice.reducer;
