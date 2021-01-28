import { combineReducers } from 'redux';
import authReducer from './auth-token.reducer';
import dialogReducer from './dialogs.reducer';
import electionReducer from './elections.reducer';
import alertReducer from './alerts.reducer';
import panelReducer from './panel.reducer';
import unverifiedUsersReducer from './unverified-users.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dialog: dialogReducer,
  election: electionReducer,
  alert: alertReducer,
  panel: panelReducer,
  unverified: unverifiedUsersReducer,
});

export default rootReducer;
