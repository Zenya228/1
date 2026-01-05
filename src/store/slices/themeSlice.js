import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: false,
<<<<<<< HEAD
    colors: {
      background: '#f8f9fa',
      surface: '#ffffff',
      primary: '#3498db',
      secondary: '#2ecc71',
      text: '#212529',
      textSecondary: '#6c757d',
      border: '#dee2e6',
      error: '#e74c3c',
      success: '#27ae60',
      warning: '#f39c12',
      buttonText: '#ffffff',
      headerText: '#ffffff'
    }
=======
>>>>>>> 07d062e (MUI темами)
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
<<<<<<< HEAD
      
      if (state.isDarkTheme) {
        state.colors = {
          background: '#121212',
          surface: '#1e1e1e',
          primary: '#1976d2',
          secondary: '#388e3c',
          text: '#e0e0e0',
          textSecondary: '#9e9e9e',
          border: '#424242',
          error: '#d32f2f',
          success: '#2e7d32',
          warning: '#f57c00',
          buttonText: '#ffffff',
          headerText: '#ffffff'
        };
      } else {
        state.colors = {
          background: '#f8f9fa',
          surface: '#ffffff',
          primary: '#3498db',
          secondary: '#2ecc71',
          text: '#212529',
          textSecondary: '#6c757d',
          border: '#dee2e6',
          error: '#e74c3c',
          success: '#27ae60',
          warning: '#f39c12',
          buttonText: '#ffffff',
          headerText: '#ffffff'
        };
      }
=======
>>>>>>> 07d062e (MUI темами)
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;