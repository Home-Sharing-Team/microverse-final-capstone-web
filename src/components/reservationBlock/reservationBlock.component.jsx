import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteUserReservationAsync } from '../../redux/reservation/reservation.actions';
import PropertyPlaceholder from '../../assets/images/property_placeholder.jpeg';

import './reservationBlock.styles.scss';
import { formatCurrencyNumber } from '../../utils/format.utils';

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
    id,
    title,
    images,
  } = propertyDetails;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUserReservationAsync(reservationId));
  };

  const image = images.length > 0 ? images[0].source : PropertyPlaceholder;

  return (
    <article className="reservation">
      <div className="reservation__img-container">
        <Link className="details-link" to={`/properties/${id}`}>
          <img src={image} alt="visual representation of the house" className="reservation__img-container__img" />
        </Link>
      </div>

      <div className="reservation__content">
        <h3 className="reservation__content__title">{title}</h3>
        <p className="reservation__content_price">

          {`Price: ${formatCurrencyNumber(price)}`}
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
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      source: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  // id: PropTypes.number.isRequired,
  reservationId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  // userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
