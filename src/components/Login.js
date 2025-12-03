import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/actions/authActions.js';
import LoginForm from '../forms/LoginForm.js';
import './Login.css';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Данные аккаунтов пользователей
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
    <div className="login-container">
      <LoginForm 
        onSubmit={handleLogin}
        error={error}
      />
    </div>
  );
};

export default Login;