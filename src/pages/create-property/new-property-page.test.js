import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux/store';
import NewPropertyPage from './newProperty-page.component';

const renderWithProviders = (reduxStore, route) => render(
  <Provider store={reduxStore}>
    <MemoryRouter initialEntries={[route]}>
      <NewPropertyPage />
    </MemoryRouter>
  </Provider>,
);

describe('NewPropertyPage component', () => {
  it('should render correctly', () => {
    const component = renderWithProviders(store, '/');
    expect(component).toMatchSnapshot();
  });
});
