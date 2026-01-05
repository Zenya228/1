import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';

const ValidationDialog = ({ open, errors, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ bgcolor: 'error.main', color: 'white' }}>
        Ошибки валидации
      </DialogTitle>
      <DialogContent sx={{ pt: 3 }}>
        <Typography variant="body1" gutterBottom>
          Обнаружены следующие ошибки:
        </Typography>
        <List>
          {errors.map((error, index) => (
            <ListItem key={index} sx={{ py: 1 }}>
              <ListItemIcon>
                <ErrorIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={error} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2, p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
          <Typography variant="body2">
            Пожалуйста, исправьте ошибки и попробуйте снова.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ValidationDialog;