import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@gmail.com' },
    { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@gmail.com' },
    { id: 3, firstName: 'Мария', lastName: 'Сидорова', email: 'maria@gmail.com' }
  ]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: state.users.length > 0 ? Math.max(...state.users.map(u => u.id)) + 1 : 1,
        ...action.payload
      };
      state.users.push(newUser);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, userData } = action.payload;
      const index = state.users.findIndex(user => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...userData };
      }
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});

export const { addUser, deleteUser, updateUser, setUsers } = userSlice.actions;
export default userSlice.reducer;