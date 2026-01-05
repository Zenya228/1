import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from '@mui/material';
import { addUser, deleteUser } from '../store/slices/userSlice.js';
import AddUserForm from '../forms/AddUserForm.js';
import ValidationDialog from './ValidationDialog.js';

const UsersTable = ({ onEdit }) => {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();
  const [validationErrors, setValidationErrors] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddUser = (userData) => {
    const user = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      ...userData
    };
    dispatch(addUser(user));
  };

  const handleShowValidationDialog = (errors) => {
    setValidationErrors(errors);
    setDialogOpen(true);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setValidationErrors([]);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Пользователи - Таблица
      </Typography>
      
      <AddUserForm 
        onSubmit={handleAddUser}
        showValidationDialog={handleShowValidationDialog}
      />

      <ValidationDialog
        open={dialogOpen}
        errors={validationErrors}
        onClose={handleCloseDialog}
      />

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Имя</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Фамилия</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Время приема</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Действие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow 
                key={user.id} 
                hover
                sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}
              >
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.appointmentTime || 'Не указано'}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onEdit(user)}
                    sx={{ mr: 1 }}
                    size="small"
                  >
                    Редактировать
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteUser(user.id)}
                    size="small"
                  >
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersTable;