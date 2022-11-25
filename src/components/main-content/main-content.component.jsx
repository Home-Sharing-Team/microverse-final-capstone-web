import PropTypes from 'prop-types';

import './main-content.styles.scss';

export function MainContent({ children }) {
  return <main className="main">{children}</main>;
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};
