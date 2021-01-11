import { SET_ELECTIONS, SET_ONE_ELECTION } from './types.actions';

export const setElections = (data) => ({
  type: SET_ELECTIONS,
  payload: data,
});

export const setOneElection = (data) => ({
  type: SET_ONE_ELECTION,
  payload: data,
});
