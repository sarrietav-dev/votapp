import { CLOSE_DIALOG, OPEN_DIALOG } from '../../actions/types.actions';

const defaultState = {
  isOpen: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
