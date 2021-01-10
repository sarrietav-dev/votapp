import { SET_AUTH_TOKEN } from './types.actions';

export default (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});
