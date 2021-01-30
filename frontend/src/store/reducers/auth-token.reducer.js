/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: localStorage.getItem('AUTH_TOKEN') || '',
    isAdmin: false,
  },
  reducers: {
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    logOut(state, _action) {
      state.authToken = '';
      state.isAdmin = false;
    },
    setIsAdmin(state, action) {
      state.isAdmin = action.payload;
    },
  },
});

export const { logOut, setAuthToken, setIsAdmin } = authSlice.actions;
export default authSlice.reducer;
