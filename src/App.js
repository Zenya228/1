import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
=======
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Box, Container, Typography, AppBar, Toolbar } from '@mui/material';
>>>>>>> 07d062e (MUI темами)
import Login from './components/Login.js';
import UsersTable from './components/UsersTable.js';
import UsersCards from './components/UsersCards.js';
import EditModal from './components/EditModal.js';
import ThemeToggle from './components/ThemeToggle.js';
import { logout } from './store/slices/authSlice.js';
<<<<<<< HEAD
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState('table');
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Получаем данные из Redux store
  const { users } = useSelector(state => state.user);
  const { isAuthenticated, currentUser } = useSelector(state => state.auth);
  const { colors, isDarkTheme } = useSelector(state => state.theme);
  
=======

// Компонент UsersPage
const UsersPage = () => {
  const [viewMode, setViewMode] = useState('table');
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useSelector(state => state.auth);
>>>>>>> 07d062e (MUI темами)
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

<<<<<<< HEAD
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
=======
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Управление пользователями
          </Typography>
          <Typography sx={{ mr: 2 }}>
            Вы вошли как: <strong>{currentUser}</strong>
          </Typography>
          <ThemeToggle />
          <Button 
            color="inherit"
            onClick={handleLogout}
            sx={{ ml: 2 }}
          >
            Выйти
          </Button>
        </Toolbar>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Button 
            variant={viewMode === 'table' ? 'contained' : 'outlined'}
            onClick={() => setViewMode('table')}
            color="secondary"
            sx={{ mx: 1 }}
          >
            Таблица
          </Button>
          <Button 
            variant={viewMode === 'cards' ? 'contained' : 'outlined'}
            onClick={() => setViewMode('cards')}
            color="secondary"
            sx={{ mx: 1 }}
          >
            Карточки
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        {viewMode === 'table' ? (
          <UsersTable onEdit={handleEdit} />
        ) : (
          <UsersCards onEdit={handleEdit} />
        )}
      </Container>
>>>>>>> 07d062e (MUI темами)

      <EditModal
        user={editingUser}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
<<<<<<< HEAD
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

=======
    </Box>
  );
};

// Главный компонент App
function App() {
  const { isDarkTheme } = useSelector(state => state.theme);
  const { isAuthenticated } = useSelector(state => state.auth);
  
  const theme = React.useMemo(() => 
    createTheme({
      palette: {
        mode: isDarkTheme ? 'dark' : 'light',
        primary: {
          main: isDarkTheme ? '#90caf9' : '#1976d2',
        },
        secondary: {
          main: isDarkTheme ? '#f48fb1' : '#dc004e',
        },
      },
    }),
    [isDarkTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

// Экспорт по умолчанию (важно!)
>>>>>>> 07d062e (MUI темами)
export default App;