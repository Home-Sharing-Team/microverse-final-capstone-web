import pluralize from 'pluralize';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedGuests } from '../../redux/reservation/reservation.actions';
import { selectSelectedGuests } from '../../redux/reservation/reservation.selectors';

import './guest-selector.styles.scss';

export function GuestSelector({ guestCapacity }) {
  const dispatch = useDispatch();
  const guestInput = useRef();
  const selectedGuests = useSelector(selectSelectedGuests);

  const guestOptionsArray = [];

  for (let numGuests = 1; numGuests <= guestCapacity; numGuests += 1) {
    guestOptionsArray.push(
      <option key={numGuests} value={numGuests}>
        {pluralize('guest', numGuests, true)}
      </option>,
    );
  }

  const handleChange = () => {
    const guests = guestInput.current.value;

    dispatch(setSelectedGuests(guests));
  };

  return (
    <select
      defaultValue={selectedGuests}
      value={selectedGuests}
      onChange={handleChange}
      ref={guestInput}
      className="guest-selector"
    >
      {guestOptionsArray}
    </select>
  );
}

GuestSelector.propTypes = {
  guestCapacity: PropTypes.number.isRequired,
};
