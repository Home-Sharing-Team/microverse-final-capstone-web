import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import { PropertyProfilePage } from './property-profile-page.components';

const renderWithProviders = (reduxStore, route) => render(
  <Provider store={reduxStore}>
    <MemoryRouter initialEntries={[route]}>
      <PropertyProfilePage />
    </MemoryRouter>
  </Provider>,
);

describe('PropertyProfilePage component', () => {
  it('should render correctly', () => {
    const component = renderWithProviders(store, '/');
    expect(component).toMatchSnapshot();
  });
});
