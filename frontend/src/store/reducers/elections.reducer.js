/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import { createSlice } from '@reduxjs/toolkit';
import { editElection as edit } from '../../utils/reducer.utils';

const initialState = {
  elections: [],
  currentElection: {},
};

const electionSlice = createSlice({
  name: 'elections',
  initialState,
  reducers: {
    fetchElections(state, action) {
      state.elections = action.payload;
    },
    saveElection(state, action) {
      state.elections.push(action.payload);
    },
    setCurrentElection(state, action) {
      state.currentElection.filter(
        (election) => election._id !== action.payload,
      );
    },
    emptyCurrentElection(state) {
      state.currentElection = {};
    },
    deleteElection(state, action) {
      state.elections.filter((election) => election._id !== action.payload);
      state.currentElection = {};
    },
    editElection(state, action) {
      state.elections = edit(state.elections, action.payload);
      state.currentElection = action.payload;
    },
  },
});

export const {
  deleteElection,
  editElection,
  emptyCurrentElection,
  fetchElections,
  saveElection,
  setCurrentElection,
} = electionSlice.actions;
export default electionSlice.reducer;
