import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation/navigation.component';
import { AuthExample } from './pages/auth-example/auth-example.component';
import { Homepage } from './pages/homepage/homepage.component';
import { checkUserSessionAsync } from './redux/user/user.actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSessionAsync());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="/auth-example" element={<AuthExample />} />
      </Route>
    </Routes>
  );
}
