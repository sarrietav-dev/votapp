import { CLOSE_ALERT, RAISE_ALERT } from '../actions/types.actions';

const defaultState = {
  open: false,
  message: '',
  variant: 'info',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RAISE_ALERT:
      return {
        open: true,
        ...action.payload,
      };
    case CLOSE_ALERT:
      return {
        open: false,
        message: '',
        variant: '',
      };
    default:
      return state;
  }
};
