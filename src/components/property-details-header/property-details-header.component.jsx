/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import Icon from '../icon/icon.component';
import { ImageViewer } from '../image-viewer/image-viewer.component';
import { SimpleCard } from '../simple-card/simple-card.component';

import './property-details-header.styles.scss';

export function PropertyDetailsHeader({ property }) {
  return (
    <header className="property-details-header">
      <SimpleCard>
        <div className="property-details-header__top">
          <h1 className="property-details__title">{property.name}</h1>
        </div>
        <div className="property-details-header__bottom">
          <ul className="bullet-list">
            <li>
              <div className="property-details-header__text-box">
                <Icon name="minimize" size="xsm" />
                <span>
                  {`${property.size} m`}
                  <sup>2</sup>
                </span>
              </div>
            </li>
            <li>
              <div className="property-details-header__text-box">
                <Icon name="map-pin" size="xsm" />
                <span>{`${property.address.city}, ${property.address.country}`}</span>
              </div>
            </li>
          </ul>
        </div>
      </SimpleCard>
      <ImageViewer images={property.images} />
    </header>
  );
}

PropertyDetailsHeader.propTypes = {
  property: PropTypes.object.isRequired,
};
