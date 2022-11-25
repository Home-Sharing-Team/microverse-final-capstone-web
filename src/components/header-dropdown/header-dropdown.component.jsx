/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useClickOutsideAlerter } from '../../hooks/click-outside-alerter.hook';

import './header-dropdown.styles.scss';

export function HeaderDropdown({
  children,
  handleCloseDropdown,
  disableClickOutsideRefs = [],
  title = '',
}) {
  const dropdownRef = useRef(null);

  useClickOutsideAlerter(
    [dropdownRef, ...disableClickOutsideRefs], handleCloseDropdown,
  );

  return (
    <div ref={dropdownRef} className="hdropdown">
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
  handleCloseDropdown: PropTypes.func.isRequired,
  disableClickOutsideRefs: PropTypes.array,
  title: PropTypes.string,
};
