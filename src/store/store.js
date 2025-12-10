import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.js';
import authReducer from './slices/authSlice.js';
import themeReducer from './slices/themeSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    theme: themeReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;