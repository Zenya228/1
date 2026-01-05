import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Box,
} from '@mui/material';
import Modal from './Modal';

const UserDetailsModal = ({ open, onClose, user }) => {
  if (!user) return null;

  const formatDate = (dateString) => {
    if (!dateString) return 'Не указано';
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Информация о пользователе"
      maxWidth="md"
    >
      <List>
        <ListItem>
          <ListItemText
            primary="Имя"
            secondary={
              <Typography variant="body1" fontWeight="medium">
                {user.firstName}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        
        <ListItem>
          <ListItemText
            primary="Фамилия"
            secondary={
              <Typography variant="body1" fontWeight="medium">
                {user.lastName}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        
        <ListItem>
          <ListItemText
            primary="Email"
            secondary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body1" fontWeight="medium">
                  {user.email}
                </Typography>
                <Chip 
                  label="Email подтвержден" 
                  size="small" 
                  color="success" 
                  variant="outlined"
                />
              </Box>
            }
          />
        </ListItem>
        <Divider />
        
        <ListItem>
          <ListItemText
            primary="ID пользователя"
            secondary={
              <Typography variant="body1" fontWeight="medium" fontFamily="monospace">
                {user.id}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        
        <ListItem>
          <ListItemText
            primary="Время приема"
            secondary={
              <Typography variant="body1" fontWeight="medium">
                {user.appointmentTime || 'Не указано'}
              </Typography>
            }
          />
        </ListItem>
        
        {user.createdAt && (
          <>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Дата создания"
                secondary={formatDate(user.createdAt)}
              />
            </ListItem>
          </>
        )}
      </List>
    </Modal>
  );
};

export default UserDetailsModal;