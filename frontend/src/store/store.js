/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import rootReducer from '../reducers/reducer';

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
