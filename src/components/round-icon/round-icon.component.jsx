/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

import './round-icon.styles.scss';

export function RoundIcon({ children, size = 'sm' }) {
  return <div className={`round-icon round-icon--${size}`}>{children}</div>;
}

RoundIcon.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};
