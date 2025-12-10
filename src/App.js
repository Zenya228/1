import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login.js';
import UsersTable from './components/UsersTable.js';
import UsersCards from './components/UsersCards.js';
import EditModal from './components/EditModal.js';
import ThemeToggle from './components/ThemeToggle.js';
import { logout } from './store/slices/authSlice.js';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState('table');
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Получаем данные из Redux store
  const { users } = useSelector(state => state.user);
  const { isAuthenticated, currentUser } = useSelector(state => state.auth);
  const { colors, isDarkTheme } = useSelector(state => state.theme);
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  // Компонент для защищенного роута
  const UsersPage = () => (
    <div className="App" style={{ 
      backgroundColor: colors.background,
      color: colors.text,
      minHeight: '100vh'
    }}>
      <header className="app-header" style={{ 
        background: colors.primary,
        color: '#ffffff'
      }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1>Управление пользователями</h1>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <span>Вы вошли как: <strong>{currentUser}</strong></span>
            <ThemeToggle />
            <button onClick={handleLogout} className="logout-btn">
              Выйти
            </button>
          </div>
        </div>
        <div className="view-controls">
        <button 
  className={viewMode === 'table' ? 'active' : ''}
  onClick={() => setViewMode('table')}
  style={{
    background: viewMode === 'table' ? colors.secondary : colors.surface,
    color: viewMode === 'table' ? colors.buttonText : colors.text,
    border: `1px solid ${colors.border}`,
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0 5px',
    fontWeight: 'bold'
  }}
>
  Таблица
</button>
<button 
  className={viewMode === 'cards' ? 'active' : ''}
  onClick={() => setViewMode('cards')}
  style={{
    background: viewMode === 'cards' ? colors.secondary : colors.surface,
    color: viewMode === 'cards' ? colors.buttonText : colors.text,
    border: `1px solid ${colors.border}`,
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '0 5px',
    fontWeight: 'bold'
  }}
>
  Карточки
</button>
        </div>
      </header>

      <main className="app-main">
        {viewMode === 'table' ? (
          <UsersTable 
            onEdit={handleEdit}
          />
        ) : (
          <UsersCards 
            onEdit={handleEdit}
          />
        )}
      </main>

      <EditModal
        user={editingUser}
        isOpen={isModalOpen}
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
            isAuthenticated ? <Navigate to="/users" replace /> : <Login />
          } 
        />
        <Route 
          path="/users" 
          element={
            isAuthenticated ? <UsersPage /> : <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/" 
          element={<Navigate to={isAuthenticated ? "/users" : "/login"} replace />} 
        />
      </Routes>
    </Router>
  );
}

export default App;