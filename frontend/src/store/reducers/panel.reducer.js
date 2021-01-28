import { CLOSE_PANEL, OPEN_PANEL } from '../actions/types.actions';

const defaultState = {
  open: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_PANEL:
      return {
        ...state,
        open: true,
      };
    case CLOSE_PANEL:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
