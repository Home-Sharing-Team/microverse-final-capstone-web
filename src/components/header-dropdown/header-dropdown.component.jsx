/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

import './header-dropdown.styles.scss';

export function HeaderDropdown({ children, title = '' }) {
  return (
    <div className="hdropdown">
      {
      title ? (
        <>
          <h2 className="hdropdown__title">
            {title}
          </h2>
          {children}
        </>
      ) : children
    }
    </div>
  );
}

HeaderDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
