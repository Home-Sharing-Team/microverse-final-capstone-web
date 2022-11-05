/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchPropertyItems } from './property.actions';

const INITIAL_STATE = {
  propertyItems: [],
  isLoading: false,
  error: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchPropertyItems.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPropertyItems.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [fetchPropertyItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.propertyItems = payload;
      state.error = null;
    },
  },
});

export default propertySlice.reducer;
