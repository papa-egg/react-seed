import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as user from './user/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({ ...user }),
  applyMiddleware(thunk)
);

export default store;
