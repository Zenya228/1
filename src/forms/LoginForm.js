import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
} from '@mui/material';

const LoginForm = ({ onSubmit, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
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
  );
};

export default LoginForm;