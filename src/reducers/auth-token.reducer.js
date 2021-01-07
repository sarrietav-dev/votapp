import { SET_AUTH_TOKEN } from '../actions/types.actions';

const defaultState = {
  authToken: '',
};

export default (state = defaultState, action) => {
  switch (action) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      return state;
  }
};
