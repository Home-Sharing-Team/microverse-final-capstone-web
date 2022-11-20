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
        <Route element={<ProtectedRoute isAllowed={!currentUser} />}>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        <Route
          path="/reservations"
          element={(
            <ProtectedRoute
              isAllowed={!!currentUser}
              redirectMessage="Sign in to access that page."
            >
              <ReservationPage />
            </ProtectedRoute>
        )}
        />
      </Route>
    </Routes>
  );
}
