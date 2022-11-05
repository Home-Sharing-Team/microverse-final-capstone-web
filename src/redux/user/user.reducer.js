/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { checkUserSessionAsync, signInAsync, signOut } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  extraReducers: {
    [checkUserSessionAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [checkUserSessionAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [checkUserSessionAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = payload;
      state.error = null;
    },
    [signInAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [signInAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [signInAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = payload;
      state.error = null;
    },
    [signOut]: (state) => {
      state.currentUser = null;
    },
  },
});

export default userSlice.reducer;