import React, { useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import Modal from './Modal';

const BulkActionsModal = ({ 
  open, 
  onClose, 
  users,
  onAction 
}) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [action, setAction] = useState('');

  const handleToggleUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
  };

  const handleSubmit = () => {
    if (action && selectedUsers.length > 0) {
      onAction(action, selectedUsers);
      onClose();
      setSelectedUsers([]);
      setAction('');
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Массовые действия"
      maxWidth="md"
      actions={
        <>
          <Button onClick={onClose} color="inherit">
            Отмена
          </Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!action || selectedUsers.length === 0}
          >
            Применить
          </Button>
        </>
      }
    >
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Выбрано: {selectedUsers.length} пользователей
        </Typography>
        
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Выберите действие</InputLabel>
          <Select
            value={action}
            label="Выберите действие"
            onChange={(e) => setAction(e.target.value)}
          >
            <MenuItem value="export">Экспортировать в CSV</MenuItem>
            <MenuItem value="send_email">Отправить email</MenuItem>
            <MenuItem value="change_role">Изменить роль</MenuItem>
            <MenuItem value="archive">Архивировать</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedUsers.length === users.length}
                indeterminate={
                  selectedUsers.length > 0 && 
                  selectedUsers.length < users.length
                }
                onChange={handleSelectAll}
              />
            }
            label="Выбрать все"
          />
        </Box>

        <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
          <List dense>
            {users.map((user) => (
              <ListItem
                key={user.id}
                button
                onClick={() => handleToggleUser(user.id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={selectedUsers.includes(user.id)}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary={`${user.firstName} ${user.lastName}`}
                  secondary={user.email}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

export default BulkActionsModal;