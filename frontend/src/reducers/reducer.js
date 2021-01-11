import { combineReducers } from 'redux';
import authReducer from './auth-token.reducer';
import fabReducer from './fab.reducer';
import electionReducer from './elections.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  fab: fabReducer,
  election: electionReducer,
});

export default rootReducer;
