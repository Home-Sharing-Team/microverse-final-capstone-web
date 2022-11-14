import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectReservationsReducer = (state) => state.reservations;

export const selectReservationsItems = createDraftSafeSelector(
  selectReservationsReducer,
  (reservationSlice) => reservationSlice.reservationsDetails,
);

export const selectReservationIsLoading = createDraftSafeSelector(
  selectReservationsReducer,
  (reservationSlice) => reservationSlice.isLoading,
);
