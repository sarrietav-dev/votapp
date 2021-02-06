/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locale: 'en',
};

const locales = createSlice({
  name: 'locales',
  initialState,
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = locales.actions;
export default locales.reducer;
