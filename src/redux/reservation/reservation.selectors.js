import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectReservationReducer = (state) => state.reservation;

export const selectReservationItems = createDraftSafeSelector(
  selectReservationReducer,
  (reservationSlice) => reservationSlice.reservationItems,
);

export const selectReservationIsLoading = createDraftSafeSelector(
  selectReservationReducer,
  (reservationSlice) => reservationSlice.isLoading,
);

export const selectSelectedGuests = createDraftSafeSelector(
  selectReservationReducer,
  (reservationSlice) => reservationSlice.selectedGuests,
);

export const selectSelectedCheckIn = createDraftSafeSelector(
  selectReservationReducer,
  (reservationSlice) => reservationSlice.selectedCheckIn,
);

export const selectSelectedCheckOut = createDraftSafeSelector(
  selectReservationReducer,
  (reservationSlice) => reservationSlice.selectedCheckOut,
);

export const selectSelectedHosting = createDraftSafeSelector(
  selectReservationReducer,
  (reservationSlice) => reservationSlice.selectedHosting,
);

export const selectNumNights = createDraftSafeSelector(
  selectReservationReducer,
  (reservationSlice) => reservationSlice.numNights,
);

export const selectReservationTotalPrice = createDraftSafeSelector(
  selectSelectedHosting,
  (selectedHosting) => {
    if (!selectedHosting) {
      return 0;
    }

    const { hosting, accommodationPrice } = selectedHosting;

    return hosting.cleaning_fee
      ? accommodationPrice + hosting.cleaning_fee
      : accommodationPrice;
  },
);
