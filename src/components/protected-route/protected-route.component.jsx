/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';
import { setStatusMessage } from '../../redux/status/status.actions';

export function ProtectedRoute({
  isAllowed,
  redirectPath = '/',
  redirectMessage,
  children,
}) {
  const dispatch = useDispatch();

  if (!isAllowed) {
    if (redirectMessage) {
      dispatch(setStatusMessage({
        type: 'error',
        message: redirectMessage,
      }));
    }

    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
}

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
  redirectMessage: PropTypes.string,
};
