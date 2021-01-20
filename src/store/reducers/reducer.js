import { combineReducers } from 'redux';
import authReducer from './auth-token.reducer';
import dialogsReducer from './dialogs.reducer';
import electionReducer from './elections.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dialog: dialogsReducer,
  election: electionReducer,
});

export default rootReducer;
