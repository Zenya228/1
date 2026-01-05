import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
=======
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
>>>>>>> 07d062e (MUI темами)
import { addUser, deleteUser } from '../store/slices/userSlice.js';
import AddUserForm from '../forms/AddUserForm.js';

const UsersTable = ({ onEdit }) => {
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
        Пользователи - Таблица
      </h1>
      
      <AddUserForm onSubmit={handleAddUser} />

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        fontSize: '14px'
      }}>
        <thead>
          <tr style={{
            backgroundColor: colors.primary,
            color: colors.headerText
          }}>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Имя</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Фамилия</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Email</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={{ 
              backgroundColor: index % 2 === 0 ? colors.background : colors.surface,
              borderBottom: `1px solid ${colors.border}`,
              color: colors.text
            }}>
              <td style={{ padding: '12px' }}>{user.id}</td>
              <td style={{ padding: '12px' }}>{user.firstName}</td>
              <td style={{ padding: '12px' }}>{user.lastName}</td>
              <td style={{ padding: '12px' }}>{user.email}</td>
              <td style={{ padding: '12px' }}>
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
                    marginRight: '8px',
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
=======
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Пользователи - Таблица
      </Typography>
      
      <AddUserForm onSubmit={handleAddUser} />

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.main' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Имя</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Фамилия</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
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
>>>>>>> 07d062e (MUI темами)
  );
};

export default UsersTable;