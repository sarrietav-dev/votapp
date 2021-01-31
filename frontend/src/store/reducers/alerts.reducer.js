/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alerts',
  initialState: {
    open: false,
    message: '',
    variant: 'info',
  },
  reducers: {
    raiseAlert(state, action) {
      state.open = true;
      state.message = action.payload.message;
      state.variant = action.payload.variant;
    },
    closeAlert(state, _action) {
      state.open = false;
      state.message = '';
      state.variant = '';
    },
  },
});

export const { raiseAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
