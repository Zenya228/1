import React, { useState, useEffect } from 'react';

const EditModal = ({ user, isOpen, onSave, onClose }) => {
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
    onSave(user.id, formData);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '4px',
        width: '90%',
        maxWidth: '400px'
      }}>
        <h2 style={{margin: '0 0 15px 0', fontSize: '18px'}}>
          Редактировать пользователя
        </h2>
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
              onClick={onClose}
              style={{flex: 1}}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;