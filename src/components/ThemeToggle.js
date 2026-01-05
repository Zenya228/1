import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
=======
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
>>>>>>> 07d062e (MUI темами)
import { toggleTheme } from '../store/slices/themeSlice.js';

const ThemeToggle = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { isDarkTheme, colors } = useSelector(state => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button 
      onClick={handleToggle}
      className="theme-toggle-btn"
      style={{
        background: colors.secondary,
        color: colors.buttonText,
        border: `1px solid ${colors.border}`,
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease',
        fontWeight: 'bold'
      }}
    >
      {isDarkTheme ? (
        <>
          <span>☀️</span>
          <span>Светлая</span>
        </>
      ) : (
        <>
          <span>🌙</span>
          <span>Темная</span>
        </>
      )}
    </button>
=======
  const { isDarkTheme } = useSelector(state => state.theme);

  return (
    <Tooltip title={isDarkTheme ? "Светлая тема" : "Темная тема"}>
      <IconButton
        onClick={() => dispatch(toggleTheme())}
        color="inherit"
      >
        {isDarkTheme ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
>>>>>>> 07d062e (MUI темами)
  );
};

export default ThemeToggle;