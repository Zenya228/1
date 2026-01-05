import React from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
=======
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
>>>>>>> 07d062e (MUI темами)
import { updateUser } from '../store/slices/userSlice.js';
import EditUserForm from '../forms/EditUserForm.js';

const EditModal = ({ user, isOpen, onClose }) => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { colors } = useSelector(state => state.theme);
=======
>>>>>>> 07d062e (MUI темами)

  const handleSave = (userId, userData) => {
    dispatch(updateUser({ id: userId, userData }));
    onClose();
  };

<<<<<<< HEAD
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: colors.surface,
        padding: '25px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '450px',
        border: `1px solid ${colors.border}`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{
          margin: '0 0 20px 0', 
          fontSize: '20px', 
          color: colors.heading,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          Редактировать пользователя
        </h2>
=======
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        }
      }}
    >
      <DialogTitle sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        Редактировать пользователя
        <IconButton
          onClick={onClose}
          sx={{ color: 'white' }}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 3 }}>
>>>>>>> 07d062e (MUI темами)
        <EditUserForm
          user={user}
          onSubmit={handleSave}
          onCancel={onClose}
        />
<<<<<<< HEAD
      </div>
    </div>
=======
      </DialogContent>
    </Dialog>
>>>>>>> 07d062e (MUI темами)
  );
};

export default EditModal;