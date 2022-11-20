import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectPropertyReducer = (state) => state.property;

export const selectPropertyItems = createDraftSafeSelector(
  selectPropertyReducer,
  (propertySlice) => propertySlice.propertyItems,
);

export const selectSelectedProperty = createDraftSafeSelector(
  selectPropertyReducer,
  (propertySlice) => propertySlice.selectedProperty,
);

export const selectSelectedPropertyMinCycleHosting = createDraftSafeSelector(
  selectSelectedProperty,
  (property) => property.min_cycle_hosting,
);

export const selectPropertyIsLoading = createDraftSafeSelector(
  selectPropertyReducer,
  (propertySlice) => propertySlice.isLoading,
);
