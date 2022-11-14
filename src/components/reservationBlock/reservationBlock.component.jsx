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

  // const dispatch = useDispatch();

  return (
    <article className="reservation">
      <div className="reservation__img-container">
        <img src={houseReserved} alt="visual representation of the house" className="reservation__img-container__img" />
      </div>

      <div className="reservation__content">
        <h3 className="reservation__content__title">Title of the property</h3>
        <p className="reservation__content_price">
          Price: $
          {price}
        </p>
        <div className="reservation__content__dates">
          <p>
            Check in date:
            {' '}
            {checkIn}
          </p>

          <p>
            Check out date:
            {' '}
            {checkOut}
          </p>
        </div>
        <p>
          Guests:
          {' '}
          {guests}
        </p>
      </div>

      <div className="reservation_actions">
        <Link className="btn-link" to="/">
          See Details
        </Link>
        <button type="button" className="btn-link">Delete</button>
      </div>
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
