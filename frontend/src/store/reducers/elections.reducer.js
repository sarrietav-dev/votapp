import { FETCH_ELECTIONS, SET_ONE_ELECTION } from '../actions/types.actions';

const defaultState = {
  elections: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ELECTIONS:
      return {
        elections: [...action.payload],
      };
    case SET_ONE_ELECTION:
      return {
        elections: [...state.elections, action.payload],
      };
    default:
      return state;
  }
};
