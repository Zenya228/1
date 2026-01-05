import React, { useState } from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
} from '@mui/material';
>>>>>>> 07d062e (MUI темами)

const LoginForm = ({ onSubmit, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  
  const { colors } = useSelector(state => state.theme);
=======
>>>>>>> 07d062e (MUI темами)

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
<<<<<<< HEAD
    <div className="login-form" style={{
      background: colors.surface,
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px',
      border: `1px solid ${colors.border}`
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '25px',
        color: colors.text,
        fontSize: '24px'
      }}>
        Вход в систему
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            color: colors.text,
            fontWeight: 'bold'
          }}>
            Логин:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введите логин"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: `1px solid ${colors.border}`,
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box',
              background: colors.surface,
              color: colors.text
            }}
          />
        </div>
        
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            color: colors.text,
            fontWeight: 'bold'
          }}>
            Пароль:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: `1px solid ${colors.border}`,
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box',
              background: colors.surface,
              color: colors.text
            }}
          />
        </div>
        
        {error && (
          <div className="error-message" style={{
            color: colors.error,
            textAlign: 'center',
            margin: '10px 0',
            padding: '10px',
            background: colors.isDarkTheme ? 'rgba(211, 47, 47, 0.1)' : '#fdf2f2',
            border: `1px solid ${colors.error}`,
            borderRadius: '4px'
          }}>
            {error}
          </div>
        )}
        
        <button 
          type="submit" 
          className="login-btn"
          style={{
            width: '100%',
            background: colors.primary,
            color: colors.buttonText,
            border: 'none',
            padding: '12px',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '10px',
            fontWeight: 'bold'
          }}
        >
          Войти
        </button>
      </form>
      
      <div className="test-accounts" style={{
        marginTop: '25px',
        padding: '15px',
        background: colors.background,
        borderRadius: '4px',
        border: `1px solid ${colors.border}`
      }}>
        <h4 style={{
          margin: '0 0 10px 0',
          color: colors.text,
          fontSize: '14px'
        }}>
          Тестовые аккаунты:
        </h4>
        <p style={{ margin: '5px 0', fontSize: '12px', color: colors.textSecondary }}>
          Логин: admin | Пароль: admin123
        </p>
        <p style={{ margin: '5px 0', fontSize: '12px', color: colors.textSecondary }}>
          Логин: user | Пароль: user123
        </p>
        <p style={{ margin: '5px 0', fontSize: '12px', color: colors.textSecondary }}>
          Логин: zenya | Пароль: zenya321
        </p>
      </div>
    </div>
=======
    <Paper
      elevation={3}
      sx={{
        p: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Вход в систему
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
          variant="outlined"
          size="medium"
        />
        
        <TextField
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          variant="outlined"
          size="medium"
        />
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 2 }}
        >
          Войти
        </Button>
      </Box>
      
      <Box
        sx={{
          mt: 3,
          p: 2,
          bgcolor: 'background.default',
          borderRadius: 1,
          border: 1,
          borderColor: 'divider',
        }}
      >
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Тестовые аккаунты:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Логин: admin | Пароль: admin123
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Логин: user | Пароль: user123
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Логин: zenya | Пароль: zenya321
        </Typography>
      </Box>
    </Paper>
>>>>>>> 07d062e (MUI темами)
  );
};

export default LoginForm;