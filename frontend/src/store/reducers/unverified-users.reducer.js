import { deleteOne } from '../../utils/reducer.utils';
import { FETCH_UNVERIFIED_USERS, VERIFY_USER } from '../actions/types.actions';

const initialState = {
  unverifiedUsers: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_UNVERIFIED_USERS:
      return { unverifiedUsers: payload };
    case VERIFY_USER:
      return {
        ...state,
        unverifiedUsers: deleteOne(state.unverifiedUsers, payload),
      };
    default:
      return state;
  }
};
