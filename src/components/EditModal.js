import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { updateUser } from '../store/slices/userSlice.js';
import EditUserForm from '../forms/EditUserForm.js';

const EditModal = ({ user, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleSave = (userId, userData) => {
    dispatch(updateUser({ id: userId, userData }));
    onClose();
  };

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
        <EditUserForm
          user={user}
          onSubmit={handleSave}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
