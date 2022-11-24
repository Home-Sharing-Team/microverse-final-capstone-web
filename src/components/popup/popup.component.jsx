/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

import Icon from '../icon/icon.component';

import './popup.styles.scss';

export function Popup({
  children,
  handleClosePopup,
  size = 'md',
}) {
  return (
    <div className={`popup popup--${size}`}>
      <div className="popup__overlay" />
      <div className="popup__window">
        <button
          onClick={handleClosePopup}
          type="button"
          className="popup__close-btn"
        >
          <Icon name="x" size="sm" />
        </button>
        {children}
      </div>
    </div>
  );
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  handleClosePopup: PropTypes.func.isRequired,
  size: PropTypes.string,
};
