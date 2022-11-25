import pluralize from 'pluralize';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/toast.hook';
import { selectSelectedProperty } from '../../redux/property/property.selectors';
import { createReservationAsync } from '../../redux/reservation/reservation.actions';
import {
  selectNumNights,
  selectSelectedCheckIn,
  selectSelectedCheckOut,
  selectSelectedGuests,
} from '../../redux/reservation/reservation.selectors';
import { selectStatusMessage } from '../../redux/status/status.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { GuestSelector } from '../guest-selector/guest-selector.component';
import { Popup } from '../popup/popup.component';
import { ReservationPriceList } from '../reservation-price-list/reservation-price-list.component';

import './reservation-checkout.styles.scss';

export function ReservationCheckout({ handleClosePopup }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const checkInDate = useSelector(selectSelectedCheckIn);
  const checkOutDate = useSelector(selectSelectedCheckOut);
  const property = useSelector(selectSelectedProperty);
  const numNights = useSelector(selectNumNights);
  const currentUser = useSelector(selectCurrentUser);
  const guests = useSelector(selectSelectedGuests);
  const statusMessage = useSelector(selectStatusMessage);

  if (statusMessage) {
    const { type } = statusMessage;

    if (type === 'error') {
      addToast(statusMessage);
    } else {
      navigate('/reservations');
    }
  }

  const handleCreateReservation = () => {
    dispatch(createReservationAsync({
      guests,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      propertyId: property.id,
    }));
  };

  const getDateBlockText = (date) => (date ? (
    <p className="reservation-checkout__block-text">
      {date.toLocaleDateString('en-US')}
    </p>
  ) : (
    <p className="reservation-checkout__block-text reservation-checkout__block-text--light">
      Add date
    </p>
  ));

  const checkInBlockText = getDateBlockText(checkInDate);
  const checkOutBlockText = getDateBlockText(checkOutDate);

  return (
    <Popup size="sm" handleClosePopup={handleClosePopup}>
      <div className="reservation-checkout">
        <header className="reservation-checkout__header">
          <h2 className="reservation-checkout__title">Your trip</h2>
          <p className="reservation-checkout__text">
            {`${pluralize('night', numNights, true)} in ${property.address.city}`}
          </p>
        </header>

        <div className="reservation-checkout__content">
          <div className="reservation-checkout__block">
            <div href="#date-picker" className="reservation-checkout__block-top">
              <div className="reservation-checkout__block-item">
                <p className="reservation-checkout__block-title">check-in</p>
                {checkInBlockText}
              </div>
              <div className="reservation-checkout__block-item">
                <p className="reservation-checkout__block-title">check-out</p>
                {checkOutBlockText}
              </div>
            </div>
            <div className="reservation-checkout__selector">
              <GuestSelector guestCapacity={property.guest_capacity} />
            </div>
          </div>

          <ReservationPriceList />
        </div>
        <footer className="reservation-checkout__footer">
          {
            currentUser ? (
              <button onClick={handleCreateReservation} type="button" className="reservation-checkout__btn">
                Confirm
              </button>
            ) : (
              <Link to="/sign-in" className="reservation-checkout__btn">
                Sign in first
              </Link>
            )
          }
        </footer>
      </div>
    </Popup>
  );
}

ReservationCheckout.propTypes = {
  handleClosePopup: PropTypes.func.isRequired,
};
