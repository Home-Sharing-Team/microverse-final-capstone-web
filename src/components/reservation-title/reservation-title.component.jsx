import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSelectedPropertyMinCycleHosting } from '../../redux/property/property.selectors';
import { selectSelectedHosting } from '../../redux/reservation/reservation.selectors';
import { formatCurrencyNumber } from '../../utils/format.utils';

import './reservation-title.styles.scss';

export function ReservationTitle({ size = 'md' }) {
  const minCycleHosting = useSelector(selectSelectedPropertyMinCycleHosting);
  const selectedHosting = useSelector(selectSelectedHosting);

  const getReservationTitle = (minCycleHosting, selectedHosting) => {
    let rate;
    let cycle;

    if (selectedHosting) {
      if (selectedHosting.discount) {
        return (
          <h2 className={`reservation-title reservation-title--${size}`}>
            <span className="reservation-title__crossed">
              {formatCurrencyNumber(minCycleHosting.rate)}
            </span>
            <div>
              {formatCurrencyNumber(selectedHosting.priceByMinCycle)}
              <span className="reservation-title__cycle">
                {minCycleHosting.cycle}
              </span>
            </div>
          </h2>
        );
      }
      rate = selectedHosting.hosting.rate;
      cycle = selectedHosting.hosting.cycle;
    } else {
      rate = minCycleHosting.rate;
      cycle = minCycleHosting.cycle;
    }

    return (
      <h2 className={`reservation-title reservation-title--${size}`}>
        <div className="reservation-title__value">
          {formatCurrencyNumber(rate)}
          <span className="reservation-title__cycle">
            {cycle}
          </span>
        </div>
      </h2>
    );
  };
  return getReservationTitle(minCycleHosting, selectedHosting);
}

ReservationTitle.propTypes = {
  size: PropTypes.string,
};
