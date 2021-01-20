/* eslint-disable no-underscore-dangle */
import {
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
        elections: [...action.payload],
      };
    case SAVE_ELECTION:
      return {
        elections: [...state.elections, action.payload],
      };
    case SET_CURRENT_ELECTION:
      return {
        ...state,
        currentElection: state.elections.filter(
          (election) => election._id === action.payload,
        ),
      };
    default:
      return state;
  }
};
