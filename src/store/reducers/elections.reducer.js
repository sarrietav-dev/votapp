/* eslint-disable no-underscore-dangle */
import {
  deleteOne,
  editElection,
} from '../../utils/reducer.utils';
import {
  DELETE_ELECTION,
  EDIT_ELECTION,
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
        )[0],
      };
    case EMPTY_CURRENT_ELECTION:
      return {
        ...state,
        currentElection: {},
      };
    case DELETE_ELECTION:
      return {
        currentElection: {},
        elections: deleteOne(state.elections, action.payload),
      };
    case EDIT_ELECTION:
      return {
        elections: editElection(state.elections, action.payload),
        currentElection: action.payload,
      };
    default:
      return state;
  }
};
