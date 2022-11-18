/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  createReservationAsync,
  deleteUserReservationAsync,
  fetchUserReservationsAsync,
  resetSelectedReservation,
  setNumNights,
  setSelectedCheckIn, setSelectedCheckOut, setSelectedGuests, setSelectedHosting,
} from './reservation.actions';

const INITIAL_STATE = {
  userReservations: [],
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
    [fetchUserReservationsAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUserReservationsAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [fetchUserReservationsAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userReservations = payload;
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
    [deleteUserReservationAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUserReservationAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [deleteUserReservationAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userReservations = payload;
      state.error = null;
    },
    [createReservationAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [createReservationAsync.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
    [createReservationAsync.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userReservations = payload;
      state.error = null;
    },
  },
});

export default reservationSlice.reducer;
