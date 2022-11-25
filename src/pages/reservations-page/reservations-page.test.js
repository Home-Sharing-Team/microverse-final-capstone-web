import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import ReservationPage from './reservationsPage.component';

const renderWithProviders = (reduxStore, route) => render(
  <Provider store={reduxStore}>
    <MemoryRouter initialEntries={[route]}>
      <ReservationPage />
    </MemoryRouter>
  </Provider>,
);

describe('ReservationPage component', () => {
  it('should render correctly', () => {
    const component = renderWithProviders(store, '/');
    expect(component).toMatchSnapshot();
  });
});
