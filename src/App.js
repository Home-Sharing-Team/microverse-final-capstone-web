import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation/navigation.component';
import { AuthExample } from './pages/auth-example/auth-example.component';
import { Homepage } from './pages/homepage/homepage.component';
import { PropertyDetailsPage } from './pages/property-details-page/property-details-page.component';
import { fetchCategoryItemsAsync } from './redux/category/category.actions';
import { checkUserSessionAsync } from './redux/user/user.actions';

export default function App() {
  const dispatch = useDispatch();

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
        <Route path="/auth-example" element={<AuthExample />} />
      </Route>
    </Routes>
  );
}
