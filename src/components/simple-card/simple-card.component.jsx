import PropTypes from 'prop-types';

import './simple-card.styles.scss';

export function SimpleCard({ children }) {
  return (
    <div className="simple-card">
      {children}
    </div>
  );
}

SimpleCard.propTypes = {
  children: PropTypes.node.isRequired,
};
