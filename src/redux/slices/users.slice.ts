import { createSlice } from '@reduxjs/toolkit';

// initialState
const initialState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserByIdStart(state, action) {
      state.loading = true;
      state.error = null;
    },
    fetchUserByIdSuccess(state, action) {
      state.loading = false;
      state.currentUser = action.payload;
    },
    fetchUserByIdFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserByIdStart,
  fetchUserByIdSuccess,
  fetchUserByIdFailure,
} = usersSlice.actions;

export default usersSlice.reducer;
