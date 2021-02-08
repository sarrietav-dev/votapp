/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducer';

export default configureStore({
  reducer: rootReducer,
});
