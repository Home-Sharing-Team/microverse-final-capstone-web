import propertyReducer from './property/property.reducer';
import userReducer from './user/user.reducer';

export const rootReducer = {
  user: userReducer,
  property: propertyReducer,
};
