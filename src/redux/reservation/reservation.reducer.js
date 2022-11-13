// Const for the actions
const FETCH_RESERVATION = 'homeSharing/reservation/FETCH_GAMES';

// Function to fetch reservation
const fetchReservation = (reservationDetails) => ({
  type: FETCH_RESERVATION,
  payload: reservationDetails,
});

// Initial State
const preloadedState = {
  reservationsDetails: [],
};

// Reducer for the reservation
const reservationReducer = (state = preloadedState, action = {}) => {
  switch (action.type) {
    case FETCH_RESERVATION:
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
