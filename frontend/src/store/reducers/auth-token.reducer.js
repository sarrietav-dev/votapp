/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: localStorage.getItem('AUTH_TOKEN') || '',
    isAdmin: false,
    _id: '',
  },
  reducers: {
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    logOut(state, _action) {
      state.authToken = '';
      state.isAdmin = false;
    },
    setData(state, action) {
      state.isAdmin = action.payload.isAdmin;
      state._id = action.payload._id;
    },
  },
});

export const { logOut, setAuthToken, setData } = authSlice.actions;
export default authSlice.reducer;
