import PropTypes from 'prop-types';

import './input-group.styles.scss';

export function InputGroup({ children }) {
  return (
    <div className="input-group">
      {children}
    </div>
  );
}

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
