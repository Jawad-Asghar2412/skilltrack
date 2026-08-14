import { createSlice } from '@reduxjs/toolkit';

const users = [
  { id: '1', name: 'Ali', email: 'student@uog.edu.pk', password: '12345' },
  { id: '2', name: 'Usman', email: 'usman@uog.edu.pk', password: '12345' },
];

const storedUser = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
  user: storedUser ? { id: storedUser.id, name: storedUser.name, email: storedUser.email } : null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        const safeUser = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
        state.user = safeUser;
        state.error = null;
        localStorage.setItem('user', JSON.stringify(safeUser));
      } else {
        state.error = 'Invalid email or password';
      }
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;