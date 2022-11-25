import categoryReducer from './category/category.reducer';
import hostingReducer from './hosting/hosting.reducer';
import propertyReducer from './property/property.reducer';
import reservationReducer from './reservation/reservation.reducer';
import statusReducer from './status/status.reducer';
import userReducer from './user/user.reducer';

export const rootReducer = {
  user: userReducer,
  property: propertyReducer,
  category: categoryReducer,
  reservation: reservationReducer,
  hosting: hostingReducer,
  status: statusReducer,
};
