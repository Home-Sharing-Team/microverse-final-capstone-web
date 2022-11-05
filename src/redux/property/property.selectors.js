import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectPropertyReducer = (state) => state.property;

export const selectPropertyItems = createDraftSafeSelector(
  selectPropertyReducer,
  (propertySlice) => propertySlice.propertyItems,
);

export const selectPropertyIsLoading = createDraftSafeSelector(
  selectPropertyReducer,
  (propertySlice) => propertySlice.isLoading,
);
