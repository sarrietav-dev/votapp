import { LOG_OUT, SET_AUTH_TOKEN } from './types.actions';

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const logOut = () => ({
  type: LOG_OUT,
});
