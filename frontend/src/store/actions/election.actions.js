import { FETCH_ELECTIONS, SAVE_ELECTION } from './types.actions';

export const fetchElections = (data) => ({
  type: FETCH_ELECTIONS,
  payload: data,
});

export const saveElection = (data) => ({
  type: SAVE_ELECTION,
  payload: data,
});
