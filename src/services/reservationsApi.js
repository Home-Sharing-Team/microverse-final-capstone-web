/* eslint-disable camelcase */
import { fetchReservation } from '../redux/reservation/reservation.reducer';

// Const for Base URL
const reservationsUrl = 'http://localhost:3000/api/v1/reservations';

// API Action for reservations
const getReservationsFromApi = () => async (dispatch) => {
  const data = await fetch(reservationsUrl);
  const response = await data.json();

  const reservationsList = await response.data;

  // Dispatch 1st page
  dispatch(
    fetchReservation(
      reservationsList.map(({
        id,
        user_id,
        accommodation_id,
        guests,
        check_in,
        check_out,
        price,
      }) => ({
        id,
        userId: user_id,
        reservationId: accommodation_id,
        guests,
        checkIn: check_in,
        checkOut: check_out,
        price,
      })),
    ),
  );

  return null;
};

export { getReservationsFromApi };
