import { LOG_OUT, SET_AUTH_TOKEN, SET_IS_ADMIN } from './types.actions';

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const setIsAdmin = (isAdmin) => ({
  type: SET_IS_ADMIN,
  payload: isAdmin,
});
