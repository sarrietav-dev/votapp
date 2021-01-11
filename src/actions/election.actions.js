import { GET_ELECTIONS, SET_ELECTIONS } from './types.actions';

export const setElections = (data) => ({
  type: SET_ELECTIONS,
  payload: data,
});

export const getElections = () => ({
  type: GET_ELECTIONS,
});
