import React, { useState, useEffect } from 'react';

const EditUserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user.id, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label style={{display: 'block', marginBottom: '5px', fontSize: '14px'}}>
          Имя:
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label style={{display: 'block', marginBottom: '5px', fontSize: '14px'}}>
          Фамилия:
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label style={{display: 'block', marginBottom: '5px', fontSize: '14px'}}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button type="submit" className="add-btn" style={{flex: 1}}>
          Сохранить
        </button>
        <button 
          type="button" 
          className="delete-btn"
          onClick={onCancel}
          style={{flex: 1}}
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;