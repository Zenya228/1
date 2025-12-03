import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import authReducer from './authReducer.js';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer
});

export default rootReducer;