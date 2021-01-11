import { SET_ELECTIONS } from '../actions/types.actions';

const defaultState = {
  elections: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ELECTIONS:
      return {
        elections: [...action.payload],
      };
    default:
      return state;
  }
};
