/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import { getCycleAbbreviation, getCycleAmountInNights } from '../../utils/cycle.utils';
import { formatCurrencyNumber } from '../../utils/format.utils';
import Icon from '../icon/icon.component';

export function HostingCard({ hosting }) {
  const {
    cycle,
    minimum_cycle_amount,
    rate,
    cleaning_fee,
  } = hosting;

  return (
    <div className="hosting-card">
      <header className="hosting-card__header">
        <h3 className="hosting-card__type">
          {cycle}
        </h3>
        <div className="hosting-card__price-box">
          <Icon size="md" name="dollar-sign" />
          <h2 className="hosting-card__price">
            {rate}
          </h2>
          <span className="hosting-card__cycle">
            {`/${getCycleAbbreviation(cycle)}`}
          </span>
        </div>
      </header>

      <ul className="hosting-card__list">
        <li className="hosting-card__item">
          <h4 className="hosting-card__item-title">
            Cleaning fee
          </h4>
          <span className="hosting-card__item-value">
            {formatCurrencyNumber(cleaning_fee)}
          </span>
        </li>
        <li className="hosting-card__item">
          <h4 className="hosting-card__item-title">
            Minimum nights
          </h4>
          <span className="hosting-card__item-value">
            {getCycleAmountInNights(minimum_cycle_amount, cycle)}
          </span>
        </li>
      </ul>

      <div className="hosting-card__action">
        <button type="button" className="hosting-card__btn">
          delete
        </button>
      </div>
    </div>
  );
}

HostingCard.propTypes = {
  hosting: PropTypes.object.isRequired,
};
