import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
  error: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      // console.log(`setUsers->`, action.payload);
      state.users = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUser: (state, action) => {
      // console.log(`setUser->`, action.payload);
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      // console.log(`clearUser->`, state); 
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    addUser: (state, action) => {
      // console.log(`adduser->`, action.payload);
      state.users.push(action.payload);
    },
    setLoading: (state, action) => {
      // console.log(`setLoading->`, action.payload);
      state.loading = action.payload;
    },
  },
});

export const { setUsers, setError, setUser, clearUser, addUser, setLoading } =
  userSlice.actions;

export default userSlice.reducer;
