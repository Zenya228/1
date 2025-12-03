import React, { useState } from 'react';

const AddUserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    onSubmit(formData);
    
    // Очищаем форму
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  };

  return (
    <div className="add-user-form">
      <h2>Добавить нового пользователя</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="add-btn">
          Добавить пользователя
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;