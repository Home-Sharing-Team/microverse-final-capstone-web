import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import houseReserved from '../../assets/images/house-reserved-test.jpg';
import './reservationBlock.styles.scss';

const ReservationBlock = (props) => {
  const {
    checkIn,
    checkOut,
    price,
    guests,
    id,
    reservationId,
    userId,
  } = props;

  const dispatch = useDispatch();

  return (
    <article className="reservation">
      <h2>
        You do have
        {' '}
        {id}
        {' '}
        reservations
      </h2>
    </article>
  );
};

export default ReservationBlock;

ReservationBlock.propTypes = {
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  reservationId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};
