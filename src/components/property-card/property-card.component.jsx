/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { formatCurrencyNumber } from '../../utils/format.utils';

import { ImageSlider } from '../image-slider/image-slider.component';

import './property-card.styles.scss';

export function PropertyCard({ property }) {
  const {
    images,
    size,
    address: { city, country },
    min_cycle_hosting,
  } = property;

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
          {formatCurrencyNumber(min_cycle_hosting.rate)}
          <span>{` ${min_cycle_hosting.cycle}`}</span>
        </p>
      </div>
    </article>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};
