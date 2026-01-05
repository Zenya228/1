import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import { addUser, deleteUser } from '../store/slices/userSlice.js';
import AddUserForm from '../forms/AddUserForm.js';

const UsersCards = ({ onEdit }) => {
  const users = useSelector(state => state.user.users);
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
                {user.appointmentTime && (
                  <Typography color="textSecondary">
                    <strong>Время приема:</strong> {user.appointmentTime}
                  </Typography>
                )}
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
  );
};

export default UsersCards;
