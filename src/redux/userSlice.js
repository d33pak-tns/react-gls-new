import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
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
      state.isAuthenticated = true;  
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false; 
    },
    addUser: (state, action) => {
      state.users.push(action.payload); 
    }
  },
});

export const { setUsers, setError, setUser, clearUser,addUser } = userSlice.actions;

export default userSlice.reducer;

