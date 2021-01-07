import { combineReducers } from 'redux';
import authReducer from './auth-token.reducer';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
