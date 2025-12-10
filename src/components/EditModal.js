import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/slices/userSlice.js';
import EditUserForm from '../forms/EditUserForm.js';

const EditModal = ({ user, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { colors } = useSelector(state => state.theme);

  const handleSave = (userId, userData) => {
    dispatch(updateUser({ id: userId, userData }));
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
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: colors.surface,
        padding: '25px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '450px',
        border: `1px solid ${colors.border}`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{
          margin: '0 0 20px 0', 
          fontSize: '20px', 
          color: colors.heading,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
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