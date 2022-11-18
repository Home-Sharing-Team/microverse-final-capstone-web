import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { resetStatusMessage } from '../redux/status/status.actions';

const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const dispatch = useDispatch();

  const addToast = ({ type, message }) => {
    const defaultSettings = {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: 'colored',
    };

    switch (type) {
      case 'success':
        toast.success(message, defaultSettings);
        break;
      case 'error':
        toast.error(message, {
          ...defaultSettings,
          autoClose: 4000,
        });
        break;
      default:
        toast.info(message, defaultSettings);
    }

    dispatch(resetStatusMessage());
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('The useToast hook must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
