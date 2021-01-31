/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchUsers from '../thunks/user.thunks';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, action) {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
