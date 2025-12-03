import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/actions/userActions.js';
import EditUserForm from '../forms/EditUserForm.js';

const EditModal = ({ user, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleSave = (userId, userData) => {
    dispatch(updateUser(userId, userData));
    onClose();
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
        <EditUserForm
          user={user}
          onSubmit={handleSave}
          onCancel={onClose}
        />
      </div>
    </div>
  );
};

export default EditModal;