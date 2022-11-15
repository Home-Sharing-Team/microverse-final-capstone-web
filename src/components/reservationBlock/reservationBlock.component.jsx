import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './reservationBlock.styles.scss';
import { deleteUserReservationAsync } from '../../redux/reservation/reservation.actions';

const ReservationBlock = (props) => {
  // const {
  //   checkIn,
  //   checkOut,
  //   price,
  //   guests,
  //   propertyDetails,
  //   id,
  //   reservationId,
  //   userId,
  // } = props;

  const {
    checkIn,
    checkOut,
    price,
    guests,
    reservationId,
    propertyDetails,
  } = props;

  const {
    title,
    image,
  } = propertyDetails;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUserReservationAsync(reservationId));
  };

  return (
    <article className="reservation">
      <div className="reservation__img-container">
        <Link className="details-link" to="/">
          <img src={image} alt="visual representation of the house" className="reservation__img-container__img" />
        </Link>
      </div>

      <div className="reservation__content">
        <h3 className="reservation__content__title">{title}</h3>
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
        <button type="button" className="btn-link" onClick={handleDelete}>Delete</button>
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
  propertyDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  // id: PropTypes.number.isRequired,
  reservationId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  // userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
