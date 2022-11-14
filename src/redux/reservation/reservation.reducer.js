// Const for the actions
const FETCH_RESERVATIONS = 'homeSharing/reservation/FETCH_RESERVATIONS';
const DELETE_RESERVATION = 'homeSharing/reservation/DELETE_RESERVATIONS';

// Function to fetch reservation
const fetchReservation = (reservationDetails) => ({
  type: FETCH_RESERVATIONS,
  payload: reservationDetails,
});

const deleteReservation = (reservationDetails) => ({
  type: DELETE_RESERVATION,
  payload: reservationDetails,
});

// Initial State
const preloadedState = {
  reservationsDetails: [],
  isLoading: false,
  error: null,
};

// Reducer for the reservation
const reservationReducer = (state = preloadedState, action = {}) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return {
        ...state,
        reservationsDetails: action.payload,
      };

    case DELETE_RESERVATION:
      return {
        ...state,
        reservationsDetails: action.payload,
      };

    default:
      return state;
  }
};

export { fetchReservation, deleteReservation };
export default reservationReducer;
