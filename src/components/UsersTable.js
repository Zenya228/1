import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser } from '../store/actions/userActions.js';
import AddUserForm from '../forms/AddUserForm.js';

const UsersTable = ({ onEdit }) => {
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
      <h1 style={{margin: '0 0 15px 0', fontSize: '20px'}}>Пользователи - Таблица</h1>
      
      <AddUserForm onSubmit={handleAddUser} />

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '15px',
        fontSize: '14px'
      }}>
        <thead>
          <tr style={{backgroundColor: '#34495e', color: 'white'}}>
            <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Имя</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Фамилия</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={{ 
              backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
              borderBottom: '1px solid #ddd'
            }}>
              <td style={{ padding: '10px' }}>{user.id}</td>
              <td style={{ padding: '10px' }}>{user.firstName}</td>
              <td style={{ padding: '10px' }}>{user.lastName}</td>
              <td style={{ padding: '10px' }}>{user.email}</td>
              <td style={{ padding: '10px' }}>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;