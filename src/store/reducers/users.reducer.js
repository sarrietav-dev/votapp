/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { fetchUsers } = usersSlice.actions;
export default usersSlice.reducer;
