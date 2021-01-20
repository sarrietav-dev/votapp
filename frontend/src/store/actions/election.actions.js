import {
  DELETE_ELECTION,
  EDIT_ELECTION,
  EMPTY_CURRENT_ELECTION,
  FETCH_ELECTIONS,
  SAVE_ELECTION,
  SET_CURRENT_ELECTION,
} from './types.actions';

export const fetchElections = (data) => ({
  type: FETCH_ELECTIONS,
  payload: data,
});

export const saveElection = (data) => ({
  type: SAVE_ELECTION,
  payload: data,
});

export const setCurrentElection = (data) => ({
  type: SET_CURRENT_ELECTION,
  payload: data,
});

export const emptyCurrentElection = () => ({
  type: EMPTY_CURRENT_ELECTION,
});

export const editElection = (data) => ({
  type: EDIT_ELECTION,
  payload: data,
});

export const deleteElection = (data) => ({
  type: DELETE_ELECTION,
  payload: data,
});