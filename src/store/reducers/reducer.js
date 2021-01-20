import { combineReducers } from 'redux';
import authReducer from './auth-token.reducer';
import fabReducer from './dialogs.reducer';
import electionReducer from './elections.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  fab: fabReducer,
  election: electionReducer,
});

export default rootReducer;
