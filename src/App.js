import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation/navigation.component';
import LoginPage from './pages/login-page/loginPage.component';
import SignUpPage from './pages/signup-page/signupPage.component';
import ReservationPage from './pages/reservations-page/reservationsPage.component';
import { Homepage } from './pages/homepage/homepage.component';
import { PropertyDetailsPage } from './pages/property-details-page/property-details-page.component';
import { fetchCategoryItemsAsync } from './redux/category/category.actions';
import { checkUserSessionAsync } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { ProtectedRoute } from './components/protected-route/protected-route.component';
import { UserProfilePage } from './pages/user-profile-page/user-profile-page.component';
import { UserPropertiesPage } from './pages/user-properties-page/user-properties-page.component';
import { PropertyProfilePage } from './pages/property-profile-page/property-profile-page.components';

export default function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSessionAsync());
    dispatch(fetchCategoryItemsAsync());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route
          path="/properties/:propertyId"
          element={<PropertyDetailsPage />}
        />
        <Route
          path="/users/:userId"
          element={<UserProfilePage />}
        />
        <Route element={(
          <ProtectedRoute
            isAllowed={!!currentUser}
            redirectMessage="Sign in to access that page."
          />
        )}
        >
          <Route path="/users/:userId/properties" element={<UserPropertiesPage />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route
            path="/properties/:propertyId/private"
            element={<PropertyProfilePage />}
          />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!currentUser} />}>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
