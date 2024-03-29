import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

//Tworzenie naszego store z danamymi
export default createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  applyMiddleware(logger, thunk, promise)
);
