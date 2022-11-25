import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import { UserPropertiesPage } from './user-properties-page.component';

const renderWithProviders = (reduxStore, route) => render(
  <Provider store={reduxStore}>
    <MemoryRouter initialEntries={[route]}>
      <UserPropertiesPage />
    </MemoryRouter>
  </Provider>,
);

describe('UserPropertiesPage component', () => {
  it('should render correctly', () => {
    const component = renderWithProviders(store, '/');
    expect(component).toMatchSnapshot();
  });
});
