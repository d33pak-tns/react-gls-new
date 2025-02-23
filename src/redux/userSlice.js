// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,  // Add isAuthenticated to track login status
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;  // Set authenticated status
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;  // Reset authentication state
    },
  },
});

export const { setUsers, setError, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

