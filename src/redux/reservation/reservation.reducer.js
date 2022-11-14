// Const for the actions
const FETCH_RESERVATIONS = 'homeSharing/reservation/FETCH_RESERVATIONS';

// Function to fetch reservation
const fetchReservation = (reservationDetails) => ({
  type: FETCH_RESERVATIONS,
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

    default:
      return state;
  }
};

export { fetchReservation };
export default reservationReducer;
