import PropTypes from 'prop-types';

import { ToastProvider } from './toast.hook';

const AppProvider = ({ children }) => (
  <ToastProvider>
    {children}
  </ToastProvider>
);

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
