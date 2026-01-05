import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Modal from './Modal';

const ConfirmDeleteModal = ({ 
  open, 
  onClose, 
  onConfirm, 
  title = "Подтверждение удаления",
  message = "Вы уверены, что хотите удалить этот элемент?",
  confirmText = "Удалить",
  cancelText = "Отмена"
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      actions={
        <>
          <Button onClick={onClose} color="inherit">
            {cancelText}
          </Button>
          <Button 
            onClick={handleConfirm} 
            color="error" 
            variant="contained"
          >
            {confirmText}
          </Button>
        </>
      }
    >
      <Typography variant="body1" gutterBottom>
        {message}
      </Typography>
      <Box sx={{ mt: 2, p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
        <Typography variant="body2" color="warning.dark">
          Это действие нельзя отменить.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;