import { FETCH_UNVERIFIED_USERS, VERIFY_USER } from './types.actions';

export const fetchUnverifiedUsers = (payload) => ({
  type: FETCH_UNVERIFIED_USERS,
  payload,
});

export const verifyUser = (payload) => ({
  type: VERIFY_USER,
  payload,
});
