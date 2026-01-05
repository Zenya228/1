import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { toggleTheme } from '../store/slices/themeSlice.js';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(state => state.theme);

  return (
    <Tooltip title={isDarkTheme ? "Светлая тема" : "Темная тема"}>
      <IconButton
        onClick={() => dispatch(toggleTheme())}
        color="inherit"
        sx={{ ml: 1 }}
      >
        {isDarkTheme ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
