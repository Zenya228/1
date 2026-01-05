import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice.js';
import ThemeToggle from './ThemeToggle.js';
import LoginForm from '../forms/LoginForm.js';
import './Login.css';
=======
import { useDispatch } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Paper,
  AppBar,
  Toolbar,
} from '@mui/material';
import { loginSuccess } from '../store/slices/authSlice.js';
import ThemeToggle from './ThemeToggle.js';
import LoginForm from '../forms/LoginForm.js';
>>>>>>> 07d062e (MUI темами)

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
<<<<<<< HEAD
  
  const { colors } = useSelector(state => state.theme);
=======
>>>>>>> 07d062e (MUI темами)

  const accounts = {
    'admin': 'admin123',
    'user': 'user123',
    'zenya': 'zenya321'
  };

  const handleLogin = (username, password) => {
    if (!username.trim() || !password.trim()) {
      setError('Введите логин и пароль');
      return;
    }

    if (accounts[username] && accounts[username] === password) {
      dispatch(loginSuccess(username));
      navigate('/users');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
<<<<<<< HEAD
    <div className="login-container" style={{ 
      background: colors.background,
      minHeight: '100vh'
    }}>
      <div className="login-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        background: colors.primary,
        color: colors.headerText
      }}>
        <h2 style={{ margin: 0, color: colors.headerText }}>Система управления пользователями</h2>
        <ThemeToggle />
      </div>
      
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '20px'
      }}>
        <LoginForm 
          onSubmit={handleLogin}
          error={error}
        />
      </div>
    </div>
=======
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Система управления пользователями
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      
      <Container 
        maxWidth="sm" 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)',
          py: 4
        }}
      >
        <LoginForm onSubmit={handleLogin} error={error} />
      </Container>
    </Box>
>>>>>>> 07d062e (MUI темами)
  );
};

export default Login;