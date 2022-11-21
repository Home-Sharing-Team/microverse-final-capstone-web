import PropTypes from 'prop-types';

import './section-title.styles.scss';

export function SectionTitle({ title }) {
  return <h1 className="section-title">{title}</h1>;
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
