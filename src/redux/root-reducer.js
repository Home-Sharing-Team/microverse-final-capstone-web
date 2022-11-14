import categoryReducer from './category/category.reducer';
import propertyReducer from './property/property.reducer';
import reservationReducer from './reservation/reservation.reducer';
import userReducer from './user/user.reducer';

export const rootReducer = {
  user: userReducer,
  property: propertyReducer,
  category: categoryReducer,
  reservation: reservationReducer,
};
