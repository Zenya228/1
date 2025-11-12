import React, { useState } from 'react';

const UsersCards = ({ users, onEdit, onDelete, onAddUser }) => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addUser = (e) => {
    e.preventDefault();
    
    if (!newUser.firstName.trim() || !newUser.lastName.trim() || !newUser.email.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    onAddUser(newUser);
    
    setNewUser({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  return (
    <div className="container">
      <h1 style={{margin: '0 0 15px 0', fontSize: '20px'}}>Пользователи - Карточки</h1>
      
      <div className="add-user-form">
        <h2>Добавить нового пользователя</h2>
        <form onSubmit={addUser}>
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
                onClick={() => onDelete(user.id)}
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