import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  );
};

export default Login;
