import { ADD_USER, DELETE_USER, UPDATE_USER, SET_USERS } from './actionTypes.js';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id
});

export const updateUser = (id, userData) => ({
  type: UPDATE_USER,
  payload: { id, userData }
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
});