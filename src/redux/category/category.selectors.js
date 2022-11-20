import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectCategoryReducer = (state) => state.category;

export const selectCategoryItems = createDraftSafeSelector(
  selectCategoryReducer,
  (categorySlice) => categorySlice.categoryItems,
);

export const selectCategoryIsLoading = createDraftSafeSelector(
  selectCategoryReducer,
  (categorySlice) => categorySlice.isLoading,
);
