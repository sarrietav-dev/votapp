/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: '',
    isAdmin: '',
    _id: '',
  },
  reducers: {
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    logOut(state) {
      state.authToken = '';
      state.isAdmin = false;
      state._id = '';
    },
    setData(state, action) {
      state.isAdmin = action.payload.is_admin;
      state._id = action.payload._id;
    },
  },
});

export const { logOut, setAuthToken, setData } = authSlice.actions;
export default authSlice.reducer;
