import PropTypes from 'prop-types';
import pluralize from 'pluralize';
import { useSelector } from 'react-redux';
import { selectSelectedProperty } from '../../redux/property/property.selectors';
import {
  selectSelectedCheckIn,
  selectSelectedCheckOut,
  selectSelectedHosting,
} from '../../redux/reservation/reservation.selectors';
import { GuestSelector } from '../guest-selector/guest-selector.component';
import { ReservationPriceList } from '../reservation-price-list/reservation-price-list.component';
import './reservation-summary.styles.scss';
import { ReservationTitle } from '../reservation-title/reservation-title.component';
import { ReservationButton } from '../reservation-button/reservation-button.component';

export function ReservationSummary({ handleReserveBtnClick }) {
  const property = useSelector(selectSelectedProperty);
  const checkInDate = useSelector(selectSelectedCheckIn);
  const checkOutDate = useSelector(selectSelectedCheckOut);
  const selectedHosting = useSelector(selectSelectedHosting);

  const getDateBtnText = (date) => (date ? (
    <p className="reservation-summary__btn-text">
      {date.toLocaleDateString('en-US')}
    </p>
  ) : (
    <p className="reservation-summary__text">Add date</p>
  ));

  const checkInBtnText = getDateBtnText(checkInDate);
  const checkOutBtnText = getDateBtnText(checkOutDate);

  return (
    <section className="reservation-summary">
      <header className="reservation-summary__header">
        <ReservationTitle />

        <p className="reservation-summary__text">
          {`Minimum stay: ${pluralize(
            property.min_cycle_hosting.cycle,
            property.min_cycle_hosting.minimum_cycle_amount,
            true,
          )}`}
        </p>
      </header>

      <div className="reservation-summary__action">
        <div className="reservation-summary__btn-group">
          <a href="#date-picker" className="reservation-summary__btn">
            <div className="reservation-summary__btn-block">
              <p className="reservation-summary__btn-title">check-in</p>
              {checkInBtnText}
            </div>
            <div className="reservation-summary__btn-block">
              <p className="reservation-summary__btn-title">check-out</p>
              {checkOutBtnText}
            </div>
          </a>
          <div className="reservation-summary__selector">
            <GuestSelector guestCapacity={property.guest_capacity} />
          </div>
        </div>

        <ReservationButton size="full" handleClick={handleReserveBtnClick} />

        <p className="reservation-summary__text">
          You won&apos;t be charged yet
        </p>
      </div>

      {selectedHosting && <ReservationPriceList />}
    </section>
  );
}

ReservationSummary.propTypes = {
  handleReserveBtnClick: PropTypes.func.isRequired,
};
