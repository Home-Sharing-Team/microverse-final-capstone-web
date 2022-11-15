/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  deleteReservationAsync,
  fetchReservationItemsAsync,
  resetSelectedReservation,
  setNumNights,
  setSelectedCheckIn, setSelectedCheckOut, setSelectedGuests, setSelectedHosting,
} from './reservation.actions';

const INITIAL_STATE = {
  reservationItems: [],
  selectedGuests: 1,
  selectedCheckIn: null,
  selectedCheckOut: null,
  numNights: 0,
  selectedHosting: null,
  isLoading: false,
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchReservationItemsAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchReservationItemsAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [fetchReservationItemsAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.reservationItems = payload;
      state.error = null;
    },
    [setSelectedGuests]: (state, { payload }) => {
      state.selectedGuests = Number(payload);
    },
    [setSelectedCheckIn]: (state, { payload }) => {
      state.selectedCheckIn = payload;
    },
    [setSelectedCheckOut]: (state, { payload }) => {
      state.selectedCheckOut = payload;
    },
    [setNumNights]: (state, { payload }) => {
      state.numNights = payload;
    },
    [setSelectedHosting]: (state, { payload }) => {
      state.selectedHosting = payload;
    },
    [resetSelectedReservation]: (state) => {
      state.selectedGuests = 1;
      state.selectedCheckIn = null;
      state.selectedCheckOut = null;
      state.numNights = 0;
      state.selectedHosting = null;
    },
    [deleteReservationAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteReservationAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [deleteReservationAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.reservationItems = payload;
      state.error = null;
    },
  },
});

export default reservationSlice.reducer;
