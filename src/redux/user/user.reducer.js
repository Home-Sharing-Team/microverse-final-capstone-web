/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  checkUserSessionAsync, fetchSelectedUserAsync, signInAsync, signOut, signUpAsync,
} from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
  selectedUser: null,
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
    [signUpAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [signUpAsync.rejected]: (state) => {
      state.isLoading = false;
    },
    [signUpAsync.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [signOut]: (state) => {
      state.currentUser = null;
    },
    [fetchSelectedUserAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSelectedUserAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [fetchSelectedUserAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.selectedUser = payload;
      state.error = null;
    },
  },
});

export default userSlice.reducer;
