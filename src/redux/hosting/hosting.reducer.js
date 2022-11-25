/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createPropertyHostingAsync, deletePropertyHostingAsync, setPropertyHostings } from './hosting.actions';

const INITIAL_STATE = {
  propertyHostings: [],
  isLoading: false,
  error: null,
};

const hostingSlice = createSlice({
  name: 'hosting',
  initialState: INITIAL_STATE,
  extraReducers: {
    [setPropertyHostings]: (state, { payload }) => {
      state.propertyHostings = payload;
    },
    [createPropertyHostingAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [createPropertyHostingAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [createPropertyHostingAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.propertyHostings = payload;
      state.error = null;
    },
    [deletePropertyHostingAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePropertyHostingAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [deletePropertyHostingAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.propertyHostings = payload;
      state.error = null;
    },
  },
});

export default hostingSlice.reducer;
