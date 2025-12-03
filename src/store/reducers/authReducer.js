import { LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes.js';

const initialState = {
  isAuthenticated: false,
  currentUser: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload
      };
      
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null
      };
      
    default:
      return state;
  }
};

export default authReducer;