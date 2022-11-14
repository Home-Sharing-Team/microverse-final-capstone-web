import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSelectedHosting } from '../../redux/reservation/reservation.selectors';

import './reservation-button.styles.scss';

export function ReservationButton({ handleClick, size = 'sm' }) {
  const selectedHosting = useSelector(selectSelectedHosting);

  const getButton = (selectedHosting) => (selectedHosting ? (
    <button
      onClick={handleClick}
      type="button"
      className={`reservation-btn reservation-btn--${size}`}
    >
      Reserve
    </button>
  ) : (
    <a
      href="#date-picker"
      className={`reservation-btn reservation-btn--${size}`}
    >
      Choose dates
    </a>
  ));

  return getButton(selectedHosting);
}

ReservationButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
