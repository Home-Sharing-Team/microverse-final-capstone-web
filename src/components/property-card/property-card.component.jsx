/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import { ImageSlider } from '../image-slider/image-slider.component';

import './property-card.styles.scss';

const CYCLE_TYPES = {
  NIGHT: 'night',
  WEEK: 'week',
  MONTH: 'month',
};

const getHostingCycleToShow = (hostings) => {
  const cycleToPriceMap = hostings.reduce(
    (acc, { cycle, rate }) => ({
      ...acc,
      [cycle]: rate,
    }),
    {},
  );

  if (cycleToPriceMap[CYCLE_TYPES.NIGHT]) {
    return {
      cycle: CYCLE_TYPES.NIGHT,
      price: cycleToPriceMap[CYCLE_TYPES.NIGHT],
    };
  }
  if (cycleToPriceMap[CYCLE_TYPES.WEEK]) {
    return {
      cycle: CYCLE_TYPES.WEEK,
      price: cycleToPriceMap[CYCLE_TYPES.WEEK],
    };
  }
  if (cycleToPriceMap[CYCLE_TYPES.MONTH]) {
    return {
      cycle: CYCLE_TYPES.MONTH,
      price: cycleToPriceMap[CYCLE_TYPES.MONTH],
    };
  }

  return { cycle: 'none', price: 0 };
};

export function PropertyCard({ property }) {
  const {
    images,
    size,
    address: { city, country },
    hostings,
  } = property;

  const { cycle, price } = getHostingCycleToShow(hostings);

  return (
    <article className="property-card">
      <ImageSlider images={images} />
      <div className="property-card__content">
        <header className="property-card__header">
          <h2 className="property-card__title">{`${city}, ${country}`}</h2>
          <span className="property-card__size">
            {`${size} m`}
            <sup>2</sup>
          </span>
        </header>
        <p className="property-card__price">
          {`$ ${price}`}
          <span>{` ${cycle}`}</span>
        </p>
      </div>
    </article>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};
