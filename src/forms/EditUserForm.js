import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const EditUserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const { colors } = useSelector(state => state.theme);

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
      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{display: 'block', marginBottom: '5px', fontSize: '14px', color: colors.heading, fontWeight: 'bold'}}>
          Имя:
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            border: `1px solid ${colors.border}`,
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box',
            backgroundColor: colors.surface,
            color: colors.text
          }}
        />
      </div>
      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{display: 'block', marginBottom: '5px', fontSize: '14px', color: colors.heading, fontWeight: 'bold'}}>
          Фамилия:
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            border: `1px solid ${colors.border}`,
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box',
            backgroundColor: colors.surface,
            color: colors.text
          }}
        />
      </div>
      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label style={{display: 'block', marginBottom: '5px', fontSize: '14px', color: colors.heading, fontWeight: 'bold'}}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            border: `1px solid ${colors.border}`,
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box',
            backgroundColor: colors.surface,
            color: colors.text
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button type="submit" className="save-btn" style={{
          flex: 1,
          backgroundColor: colors.secondary,
          color: colors.buttonText,
          border: 'none',
          padding: '12px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          Сохранить
        </button>
        <button 
          type="button" 
          className="cancel-btn"
          onClick={onCancel}
          style={{
            flex: 1,
            backgroundColor: colors.error,
            color: colors.buttonText,
            border: 'none',
            padding: '12px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;