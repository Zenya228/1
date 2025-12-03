import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser } from '../store/actions/userActions.js';
import AddUserForm from '../forms/AddUserForm.js';

const UsersCards = ({ onEdit }) => {
  const users = useSelector(state => state.user.users);
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
    <div className="container">
      <h1 style={{margin: '0 0 15px 0', fontSize: '20px'}}>Пользователи - Карточки</h1>
      
      <AddUserForm onSubmit={handleAddUser} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '15px',
        marginTop: '15px'
      }}>
        {users.map(user => (
          <div key={user.id} style={{
            background: 'white',
            padding: '15px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{margin: '0 0 10px 0', fontSize: '16px'}}>
              {user.firstName} {user.lastName}
            </h3>
            <p style={{margin: '5px 0', fontSize: '14px'}}>
              <strong>Email:</strong> {user.email}
            </p>
            <p style={{margin: '5px 0', fontSize: '14px'}}>
              <strong>ID:</strong> {user.id}
            </p>
            <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
              <button 
                className="edit-btn"
                onClick={() => onEdit(user)}
              >
                Редактировать
              </button>
              <button 
                className="delete-btn"
                onClick={() => handleDeleteUser(user.id)}
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