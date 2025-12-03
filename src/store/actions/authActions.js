import { LOGIN_SUCCESS, LOGOUT } from './actionTypes.js';

export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: username
});

export const logout = () => ({
  type: LOGOUT
});