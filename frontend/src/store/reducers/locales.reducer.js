/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import en from '../../locales/en';
import es from '../../locales/es';

const initialState = {
  language: 'en',
  locale: en(),
};

const locales = createSlice({
  name: 'locales',
  initialState,
  reducers: {
    setLocale(state, action) {
      state.language = action.payload;
      if (state.language === 'en') {
        state.locale = en();
      } else {
        state.locale = es();
      }
    },
  },
});

export const { setLocale } = locales.actions;
export default locales.reducer;
