import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser } from '../store/slices/userSlice.js';
import AddUserForm from '../forms/AddUserForm.js';

const UsersCards = ({ onEdit }) => {
  const users = useSelector(state => state.user.users);
  const { colors } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleAddUser = (userData) => {
    const user = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      ...userData
    };
    dispatch(addUser(user));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container" style={{
      background: colors.surface,
      color: colors.text,
      border: `1px solid ${colors.border}`,
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px'
    }}>
      <h1 style={{
        margin: '0 0 20px 0', 
        fontSize: '24px', 
        color: colors.text,
        fontWeight: 'bold'
      }}>
        Пользователи - Карточки
      </h1>
      
      <AddUserForm onSubmit={handleAddUser} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '15px',
        marginTop: '15px'
      }}>
        {users.map(user => (
          <div key={user.id} style={{
            background: colors.surface,
            padding: '15px',
            borderRadius: '4px',
            border: `1px solid ${colors.border}`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            color: colors.text
          }}>
            <h3 style={{
              margin: '0 0 10px 0', 
              fontSize: '16px',
              color: colors.text,
              fontWeight: 'bold'
            }}>
              {user.firstName} {user.lastName}
            </h3>
            <p style={{margin: '5px 0', fontSize: '14px', color: colors.text}}>
              <strong>Email:</strong> {user.email}
            </p>
            <p style={{margin: '5px 0', fontSize: '14px', color: colors.text}}>
              <strong>ID:</strong> {user.id}
            </p>
            <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
              <button 
                className="edit-btn"
                onClick={() => onEdit(user)}
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.buttonText,
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Редактировать
              </button>
              <button 
                className="delete-btn"
                onClick={() => handleDeleteUser(user.id)}
                style={{
                  backgroundColor: colors.error,
                  color: colors.buttonText,
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersCards;