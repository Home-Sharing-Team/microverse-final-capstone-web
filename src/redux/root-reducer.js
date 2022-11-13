import propertyReducer from './property/property.reducer';
import userReducer from './user/user.reducer';
import reservationReducer from './reservation/reservation.reducer';

export const rootReducer = {
  user: userReducer,
  property: propertyReducer,
  reservations: reservationReducer,
};
