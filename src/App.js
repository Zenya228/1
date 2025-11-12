import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.js';
import UsersTable from './components/UsersTable.js';
import UsersCards from './components/UsersCards.js';
import EditModal from './components/EditModal.js';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@gmail.com' },
    { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@gmail.com' },
    { id: 3, firstName: 'Мария', lastName: 'Сидорова', email: 'maria@gmail.com' }
  ]);

  const [viewMode, setViewMode] = useState('table');
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

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

  // Компонент для защищенного роута
  const UsersPage = () => (
    <div className="App">
      <header className="app-header">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1>Управление пользователями</h1>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <span>Вы вошли как: <strong>{currentUser}</strong></span>
            <button onClick={handleLogout} className="logout-btn">
              Выйти
            </button>
          </div>
        </div>
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

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            currentUser ? <Navigate to="/users" replace /> : <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/users" 
          element={
            currentUser ? <UsersPage /> : <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/" 
          element={<Navigate to={currentUser ? "/users" : "/login"} replace />} 
        />
      </Routes>
    </Router>
  );
}

export default App;