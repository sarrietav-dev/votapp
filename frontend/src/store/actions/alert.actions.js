import { CLOSE_ALERT, RAISE_ALERT } from './types.actions';

export const raiseAlert = (data) => ({
  type: RAISE_ALERT,
  payload: data,
});

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});
