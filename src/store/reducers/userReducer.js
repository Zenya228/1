import { ADD_USER, DELETE_USER, UPDATE_USER, SET_USERS } from '../actions/actionTypes.js';

const initialState = {
  users: [
    { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@gmail.com' },
    { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@gmail.com' },
    { id: 3, firstName: 'Мария', lastName: 'Сидорова', email: 'maria@gmail.com' }
  ]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      };
      
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
      
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
      
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id
            ? { ...user, ...action.payload.userData }
            : user
        )
      };
      
    default:
      return state;
  }
};

export default userReducer;