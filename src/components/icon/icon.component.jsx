import PropTypes from 'prop-types';

import sprite from '../../assets/images/icons/sprite.svg';
import './icon.styles.scss';

export default function Icon({ name, size }) {
  return (
    <svg className={`icon--${size}`}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
