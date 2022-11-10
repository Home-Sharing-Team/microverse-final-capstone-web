/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchPropertyItemsAsync, fetchPropertyItemsByCategoryAsync } from './property.actions';

const INITIAL_STATE = {
  propertyItems: [],
  isLoading: false,
  error: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchPropertyItemsAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPropertyItemsAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [fetchPropertyItemsAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.propertyItems = payload;
      state.error = null;
    },
    [fetchPropertyItemsByCategoryAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPropertyItemsByCategoryAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [fetchPropertyItemsByCategoryAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.propertyItems = payload;
      state.error = null;
    },
  },
});

export default propertySlice.reducer;
