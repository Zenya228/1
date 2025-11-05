import React, { useState } from 'react';

const UsersTable = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@gmail.com' },
    { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@gmail.com' },
    { id: 3, firstName: 'Мария', lastName: 'Сидорова', email: 'maria@gmail.com' }
  ]);

  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

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

    const user = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email
    };

    setUsers([...users, user]);
    
    // Очищаем форму
    setNewUser({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  return (
    <div className="container">
      <h1>Пользователи</h1>
      
      {/* Форма добавления нового пользователя */}
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

      {/* Таблица пользователей */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button 
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
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