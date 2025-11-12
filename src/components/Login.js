import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const accounts = {
    'admin': 'admin123',
    'user': 'user123',
    'zenya': 'zenya321'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      setError('Введите логин и пароль');
      return;
    }

    if (accounts[username] && accounts[username] === password) {
      onLogin(username);
      navigate('/users');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Вход в систему</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Логин:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите логин"
              required
            />
          </div>
          <div className="form-group">
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-btn">
            Войти
          </button>
        </form>
        
        <div className="test-accounts">
          <h4>Тестовые аккаунты:</h4>
          <p>Логин: admin | Пароль: admin123</p>
          <p>Логин: user | Пароль: user123</p>
          <p>Логин: zenya | Пароль: zenya321</p>
        </div>
      </div>
    </div>
  );
};

export default Login;