import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser } from '../store/actions/userActions.js';

const UsersTable = ({ onEdit }) => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    
    if (!newUser.firstName.trim() || !newUser.lastName.trim() || !newUser.email.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    const user = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      ...newUser
    };

    dispatch(addUser(user));
    
    setNewUser({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container">
      <h1 style={{margin: '0 0 15px 0', fontSize: '20px'}}>Пользователи - Таблица</h1>
      
      <div className="add-user-form">
        <h2>Добавить нового пользователя</h2>
        <form onSubmit={handleAddUser}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="Имя"
              value={newUser.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Фамилия"
              value={newUser.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="add-btn">
            Добавить пользователя
          </button>
        </form>
      </div>

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