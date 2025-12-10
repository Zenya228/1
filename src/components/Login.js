import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice.js';
import ThemeToggle from './ThemeToggle.js';
import LoginForm from '../forms/LoginForm.js';
import './Login.css';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { colors } = useSelector(state => state.theme);

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
  );
};

export default Login;