/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({
  isAllowed,
  redirectPath = '/',
  children,
}) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
}

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
