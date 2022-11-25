import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectHostingReducer = (state) => state.hosting;

export const selectPropertyHostings = createDraftSafeSelector(
  selectHostingReducer,
  (hostingSlice) => hostingSlice.propertyHostings,
);

export const selectHostingsIsLoading = createDraftSafeSelector(
  selectHostingReducer,
  (hostingSlice) => hostingSlice.isLoading,
);
