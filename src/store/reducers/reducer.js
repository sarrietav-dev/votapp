import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth-token.reducer';
import dialog from './dialogs.reducer';
import election from './elections.reducer';
import alert from './alerts.reducer';
import panel from './panel.reducer';
import unverified from './unverified-users.reducer';
import users from './users.reducer';

const rootReducer = combineReducers({
  auth,
  dialog,
  election,
  alert,
  panel,
  unverified,
  users,
});

export default rootReducer;
