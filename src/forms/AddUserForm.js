import React, { useState } from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
>>>>>>> 07d062e (MUI темами)

const AddUserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

<<<<<<< HEAD
  const { colors } = useSelector(state => state.theme);

=======
>>>>>>> 07d062e (MUI темами)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    onSubmit(formData);
    
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  return (
<<<<<<< HEAD
    <div className="add-user-form" style={{
      backgroundColor: colors.surface,
      padding: '15px',
      borderRadius: '4px',
      marginBottom: '15px',
      border: `1px solid ${colors.border}`
    }}>
      <h2 style={{ 
        margin: '0 0 15px 0', 
        fontSize: '18px', 
        color: colors.text,
        fontWeight: 'bold' 
      }}>
        Добавить нового пользователя
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: `1px solid ${colors.border}`,
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
              backgroundColor: colors.surface,
              color: colors.text
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: `1px solid ${colors.border}`,
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
              backgroundColor: colors.surface,
              color: colors.text
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: `1px solid ${colors.border}`,
              borderRadius: '4px',
              fontSize: '14px',
              boxSizing: 'border-box',
              backgroundColor: colors.surface,
              color: colors.text
            }}
          />
        </div>
        <button type="submit" className="add-btn" style={{
          backgroundColor: colors.secondary,
          color: colors.buttonText,
          border: 'none',
          padding: '10px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          width: '100%',
          fontWeight: 'bold'
        }}>
          Добавить пользователя
        </button>
      </form>
    </div>
=======
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Добавить нового пользователя
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          name="firstName"
          label="Имя"
          value={formData.firstName}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          size="small"
        />
        
        <TextField
          name="lastName"
          label="Фамилия"
          value={formData.lastName}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          size="small"
        />
        
        <TextField
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          size="small"
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Добавить пользователя
        </Button>
      </Box>
    </Paper>
>>>>>>> 07d062e (MUI темами)
  );
};

export default AddUserForm;