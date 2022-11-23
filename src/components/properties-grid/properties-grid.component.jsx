/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PropertyCard } from '../property-card/property-card.component';

import './properties-grid.styles.scss';

export function PropertiesGrid({ properties, isListing = true }) {
  return (
    <div className="properties-grid">
      {properties.map((property) => (
        <Link key={property.id} to={isListing ? `/properties/${property.id}` : `/properties/${property.id}/private`}>
          <PropertyCard property={property} isListing={isListing} />
        </Link>
      ))}
    </div>
  );
}

PropertiesGrid.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  isListing: PropTypes.bool,
};
