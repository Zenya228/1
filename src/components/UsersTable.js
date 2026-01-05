// Добавьте в импорты
import { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import UserDetailsModal from './UserDetailsModal';
import BulkActionsModal from './BulkActionsModal';

// В компоненте UsersTable добавьте состояния
const UsersTable = ({ onEdit }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [bulkModalOpen, setBulkModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setDeleteModalOpen(true);
  };

  const handleDetailsClick = (user) => {
    setSelectedUser(user);
    setDetailsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      dispatch(deleteUser(userToDelete.id));
    }
  };

  const handleBulkAction = (action, userIds) => {
    console.log(`Выполняется действие "${action}" для пользователей:`, userIds);
    // Реализуйте логику массовых действий
  };

  return (
    <Box>
      {/* Добавьте кнопку для массовых действий */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">Пользователи - Таблица</Typography>
        <Button
          variant="outlined"
          onClick={() => setBulkModalOpen(true)}
        >
          Массовые действия
        </Button>
      </Box>

      {/* В таблице добавьте кнопку просмотра и измените удаление */}
      <TableCell>
        <IconButton
          onClick={() => handleDetailsClick(user)}
          color="info"
          size="small"
          sx={{ mr: 1 }}
        >
          <VisibilityIcon />
        </IconButton>
        <Button
          variant="contained"
          size="small"
          onClick={() => onEdit(user)}
          sx={{ mr: 1 }}
        >
          Редактировать
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDeleteClick(user)}
        >
          Удалить
        </Button>
      </TableCell>

      {/* Добавьте модалки в конец компонента */}
      <ConfirmDeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      <UserDetailsModal
        open={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        user={selectedUser}
      />

      <BulkActionsModal
        open={bulkModalOpen}
        onClose={() => setBulkModalOpen(false)}
        users={users}
        onAction={handleBulkAction}
      />
    </Box>
  );
};