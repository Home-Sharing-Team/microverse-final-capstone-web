import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectStatusReducer = (state) => state.status;

export const selectStatusMessage = createDraftSafeSelector(
  selectStatusReducer,
  (statusSlice) => statusSlice.statusMessage,
);
