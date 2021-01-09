import { combineReducers } from 'redux';
import authReducer from './auth-token.reducer';
import fabReducer from './fab.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  fab: fabReducer,
});

export default rootReducer;
