/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';

const enhancers = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

export default configureStore({
  reducer: rootReducer,
  enhancers,
});
