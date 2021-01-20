/* eslint-disable no-underscore-dangle */
import {
  EMPTY_CURRENT_ELECTION,
  FETCH_ELECTIONS,
  SAVE_ELECTION,
  SET_CURRENT_ELECTION,
} from '../actions/types.actions';

const defaultState = {
  elections: [],
  currentElection: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ELECTIONS:
      return {
        ...state,
        elections: [...action.payload],
      };
    case SAVE_ELECTION:
      return {
        ...state,
        elections: [...state.elections, action.payload],
      };
    case SET_CURRENT_ELECTION:
      return {
        ...state,
        currentElection: state.elections.filter(
          (election) => election._id === action.payload,
        ),
      };
    case EMPTY_CURRENT_ELECTION:
      return {
        ...state,
        currentElection: {},
      };
    default:
      return state;
  }
};
