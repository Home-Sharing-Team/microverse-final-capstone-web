import pluralize from 'pluralize';
import { useSelector } from 'react-redux';
import { selectSelectedProperty } from '../../redux/property/property.selectors';
import {
  selectNumNights,
  selectReservationTotalPrice,
  selectSelectedHosting,
} from '../../redux/reservation/reservation.selectors';
import { formatCurrencyNumber } from '../../utils/format.utils';

import './reservation-price-list.styles.scss';

export function ReservationPriceList() {
  const property = useSelector(selectSelectedProperty);
  const numNights = useSelector(selectNumNights);
  const selectedHosting = useSelector(selectSelectedHosting);
  const totalPrice = useSelector(selectReservationTotalPrice);

  return (
    <div className="reservation-price-list">
      {
        selectedHosting && (
          <>
            {selectedHosting.discount > 0 && (
              <ul className="reservation-price-list__list">
                <li className="reservation-price-list__item">
                  <p className="reservation-price-list__heading">
                    {`${formatCurrencyNumber(
                      property.min_cycle_hosting.rate,
                    )} x ${pluralize('night', numNights, true)}`}
                  </p>
                  <p className="reservation-price-list__value">
                    {formatCurrencyNumber(
                      property.min_cycle_hosting.rate * numNights,
                    )}
                  </p>
                </li>
                <li className="reservation-price-list__item">
                  <p className="reservation-price-list__heading">
                    {`${
                      selectedHosting.hosting.cycle.charAt(0).toUpperCase()
                      + selectedHosting.hosting.cycle.slice(1)
                    }ly discount`}
                  </p>
                  <p className="reservation-price-list__value reservation-price-list__value--green">
                    {`-${formatCurrencyNumber(selectedHosting.discount * numNights)}`}
                  </p>
                </li>
              </ul>
            )}
            <ul className="reservation-price-list__list">
              <li className="reservation-price-list__item">
                <p className="reservation-price-list__heading">
                  {`${formatCurrencyNumber(
                    selectedHosting.priceByNight,
                  )} x ${pluralize('night', numNights, true)}`}
                </p>
                <p className="reservation-price-list__value">
                  {formatCurrencyNumber(selectedHosting.accommodationPrice)}
                </p>
              </li>

              {selectedHosting.hosting.cleaning_fee > 0 && (
                <li className="reservation-price-list__item">
                  <p className="reservation-price-list__heading">Cleaning fee</p>
                  <p className="reservation-price-list__value">
                    {formatCurrencyNumber(selectedHosting.hosting.cleaning_fee)}
                  </p>
                </li>
              )}

              <li className="reservation-price-list__item">
                <p className="reservation-price-list__heading">Service fee</p>
                <p className="reservation-price-list__value">$ 0</p>
              </li>
            </ul>

            <div className="reservation-price-list__total">
              <span>Total</span>
              <span>{formatCurrencyNumber(totalPrice)}</span>
            </div>
          </>
        )
      }
    </div>
  );
}
