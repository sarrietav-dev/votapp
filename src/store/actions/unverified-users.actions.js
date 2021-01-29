import {
  DENY_USER,
  FETCH_UNVERIFIED_USERS,
  VERIFY_USER,
} from './types.actions';

export const fetchUnverifiedUsers = (payload) => ({
  type: FETCH_UNVERIFIED_USERS,
  payload,
});

export const verifyUser = (payload) => ({
  type: VERIFY_USER,
  payload,
});

export const denyUser = (payload) => ({
  type: DENY_USER,
  payload,
});
