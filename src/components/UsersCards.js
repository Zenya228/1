import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
=======
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Paper,
} from '@mui/material';
>>>>>>> 07d062e (MUI темами)
import { addUser, deleteUser } from '../store/slices/userSlice.js';
import AddUserForm from '../forms/AddUserForm.js';

const UsersCards = ({ onEdit }) => {
  const users = useSelector(state => state.user.users);
<<<<<<< HEAD
  const { colors } = useSelector(state => state.theme);
=======
>>>>>>> 07d062e (MUI темами)
  const dispatch = useDispatch();

  const handleAddUser = (userData) => {
    const user = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      ...userData
    };
    dispatch(addUser(user));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
<<<<<<< HEAD
    <div className="container" style={{
      background: colors.surface,
      color: colors.text,
      border: `1px solid ${colors.border}`,
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px'
    }}>
      <h1 style={{
        margin: '0 0 20px 0', 
        fontSize: '24px', 
        color: colors.text,
        fontWeight: 'bold'
      }}>
        Пользователи - Карточки
      </h1>
      
      <AddUserForm onSubmit={handleAddUser} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '15px',
        marginTop: '15px'
      }}>
        {users.map(user => (
          <div key={user.id} style={{
            background: colors.surface,
            padding: '15px',
            borderRadius: '4px',
            border: `1px solid ${colors.border}`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            color: colors.text
          }}>
            <h3 style={{
              margin: '0 0 10px 0', 
              fontSize: '16px',
              color: colors.text,
              fontWeight: 'bold'
            }}>
              {user.firstName} {user.lastName}
            </h3>
            <p style={{margin: '5px 0', fontSize: '14px', color: colors.text}}>
              <strong>Email:</strong> {user.email}
            </p>
            <p style={{margin: '5px 0', fontSize: '14px', color: colors.text}}>
              <strong>ID:</strong> {user.id}
            </p>
            <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
              <button 
                className="edit-btn"
                onClick={() => onEdit(user)}
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.buttonText,
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Редактировать
              </button>
              <button 
                className="delete-btn"
                onClick={() => handleDeleteUser(user.id)}
                style={{
                  backgroundColor: colors.error,
                  color: colors.buttonText,
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
=======
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Пользователи - Карточки
      </Typography>
      
      <AddUserForm onSubmit={handleAddUser} />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  <strong>Email:</strong> {user.email}
                </Typography>
                <Typography color="textSecondary">
                  <strong>ID:</strong> {user.id}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onEdit(user)}
                  size="small"
                  fullWidth
                  sx={{ mr: 1 }}
                >
                  Редактировать
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteUser(user.id)}
                  size="small"
                  fullWidth
                >
                  Удалить
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
>>>>>>> 07d062e (MUI темами)
  );
};

export default UsersCards;