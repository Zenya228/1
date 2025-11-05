import React, { useState } from 'react';
import UsersTable from './components/UsersTable.js';
import UsersCards from './components/UsersCards.js';
import EditModal from './components/EditModal.js';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@gmail.com' },
    { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@gmail.com' },
    { id: 3, firstName: 'Мария', lastName: 'Сидорова', email: 'maria@gmail.com' }
  ]);

  const [viewMode, setViewMode] = useState('table'); // 'table' или 'cards'
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSave = (userId, updatedData) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, ...updatedData }
        : user
    ));
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const addUser = (newUser) => {
    const user = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      ...newUser
    };
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Управление пользователями</h1>
        <div className="view-controls">
          <button 
            className={viewMode === 'table' ? 'active' : ''}
            onClick={() => setViewMode('table')}
          >
             Таблица
          </button>
          <button 
            className={viewMode === 'cards' ? 'active' : ''}
            onClick={() => setViewMode('cards')}
          >
             Карточки
          </button>
        </div>
      </header>

      <main className="app-main">
        {viewMode === 'table' ? (
          <UsersTable 
            users={users} 
            onEdit={handleEdit}
            onDelete={deleteUser} 
            onAddUser={addUser}
          />
        ) : (
          <UsersCards 
            users={users} 
            onEdit={handleEdit}
            onDelete={deleteUser} 
            onAddUser={addUser}
          />
        )}
      </main>

      <EditModal
        user={editingUser}
        isOpen={isModalOpen}
        onSave={handleSave}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;