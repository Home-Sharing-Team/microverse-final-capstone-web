// /* eslint-disable camelcase */
// import { fetchReservation, deleteReservation } from '../redux/reservation/reservation.reducer';

// // Const for Base URL
// const reservationsUrl = 'http://localhost:3000/api/v1/reservations';

// // API Action for reservations
// const getReservationsFromApi = () => async (dispatch) => {
//   const data = await fetch(reservationsUrl);
//   const response = await data.json();

//   const reservationsList = await response.data;

//   // Dispatch 1st page
//   dispatch(
//     fetchReservation(
//       reservationsList.map(({
//         id,
//         user_id,
//         hosting_id,
//         guests,
//         check_in,
//         check_out,
//         price,
//         property,
//       }) => ({
//         id,
//         userId: user_id,
//         reservationId: hosting_id,
//         guests,
//         checkIn: check_in,
//         checkOut: check_out,
//         price,
//         propertyDetails: property,
//       })),
//     ),
//   );

//   return null;
// };

// const deleteReservationFromApi = (reservationId) => async (dispatch) => {
//   const data = await fetch(`${reservationsUrl}/${reservationId}`, { method: 'delete' });

//   const response = await data.json();

//   const reservationsList = await response.data;

//   dispatch(
//     deleteReservation(reservationsList),
//   );

//   return null;
// };

// export { getReservationsFromApi, deleteReservationFromApi };
