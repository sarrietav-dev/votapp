/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unverifiedUsers: [],
};

const unverifiedUsersSlice = createSlice({
  name: 'unverified',
  initialState,
  reducers: {
    fetchUnverifiedUsers(state, action) {
      state.unverifiedUsers = action.payload;
    },
    verifyUser(state, action) {
      state.unverifiedUsers = state.unverifiedUsers.filter(
        (user) => user._id !== action.payload
      );
    },
    denyUser(state, action) {
      state.unverifiedUsers = state.unverifiedUsers.filter(
        (user) => user._id !== action.payload
      );
    },
  },
});

export const {
  denyUser,
  fetchUnverifiedUsers,
  verifyUser,
} = unverifiedUsersSlice.actions;
export default unverifiedUsersSlice.reducer;
