import { FETCH_ELECTIONS, SET_ONE_ELECTION } from './types.actions';

export const fetchElections = (data) => ({
  type: FETCH_ELECTIONS,
  payload: data,
});

export const setOneElection = (data) => ({
  type: SET_ONE_ELECTION,
  payload: data,
});
