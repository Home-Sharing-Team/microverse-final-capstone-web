/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoryItemsAsync } from './category.actions';

const INITIAL_STATE = {
  categoryItems: [],
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchCategoryItemsAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCategoryItemsAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [fetchCategoryItemsAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categoryItems = payload;
      state.error = null;
    },
  },
});

export default categorySlice.reducer;
