/* eslint-disable no-undef */
import { LOG_OUT, SET_AUTH_TOKEN } from '../actions/types.actions';

const defaultState = {
  authToken: localStorage.getItem('AUTH_TOKEN') || '',
  is_admin: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case LOG_OUT:
      return {
        authToken: '',
      };
    default:
      return state;
  }
};
