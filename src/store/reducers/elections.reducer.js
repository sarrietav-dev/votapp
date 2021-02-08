/* eslint-disable import/no-cycle */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import { createSlice } from '@reduxjs/toolkit';
import { editElection as edit } from './utils/reducer.utils';
import { endElection, vote } from '../thunks/election.thunks';

const initialState = {
  elections: [],
  currentElection: {},
  selectedCandidates: [],
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
      state.currentElection = state.elections.filter(
        (election) => election._id === action.payload,
      )[0];
    },
    emptyCurrentElection(state) {
      state.currentElection = {};
    },
    deleteElection(state, action) {
      state.elections = state.elections.filter(
        (election) => election._id !== action.payload,
      );
      state.currentElection = {};
    },
    editElection(state, action) {
      state.elections = edit(state.elections, action.payload);
      state.currentElection = action.payload;
    },
    setCandidates(state, action) {
      state.selectedCandidates = action.payload;
    },
  },
  extraReducers: {
    [vote.fulfilled]: (state, action) => {
      const votedCandidate = state.currentElection.candidates.filter(
        (candidate) => candidate._id === action.payload.candidateId,
      );

      votedCandidate.votes += 1;

      state.currentElection.candidates.filter(
        (candidate) => candidate._id !== action.payload.candidateId,
      );

      state.currentElection.candidates.push(votedCandidate);

      state.currentElection.registeredVotes.push(action.payload.userId);

      state.elections.filter(
        (election) => election._id !== state.currentElection._id,
      );

      state.elections.push(state.currentElection);
    },
    [endElection.fulfilled]: (state) => {
      state.currentElection.status = 'finished';

      state.elections.filter(
        (election) => election._id !== state.currentElection._id,
      );

      state.elections.push(state.currentElection);
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
  setCandidates,
} = electionSlice.actions;
export default electionSlice.reducer;
