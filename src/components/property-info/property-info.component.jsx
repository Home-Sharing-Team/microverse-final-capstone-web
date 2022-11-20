/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import userAvatar from '../../assets/images/avatar_placeholder.jpg';

import './property-info.styles.scss';

export function PropertyInfo({ property }) {
  const {
    user,
    guest_capacity,
    bedrooms,
    beds,
    baths,
    description,
    categories,
  } = property;

  return (
    <div className="property-info">
      <div className="property-info__owner">
        <div className="property-info__owner-content">
          <h2 className="property-info__title">{`Hosted by ${user.name}`}</h2>
          <ul className="bullet-list">
            <li>
              <span>{`${guest_capacity} guests`}</span>
            </li>
            <li>
              <span>{`${bedrooms} bedrooms`}</span>
            </li>
            <li>
              <span>{`${beds} beds`}</span>
            </li>
            <li>
              <span>{`${baths} baths`}</span>
            </li>
          </ul>
        </div>
        <img
          className="property-info__owner-img"
          src={userAvatar}
          alt="user avatar"
        />
      </div>

      <div className="property-info__description">
        <h2 className="property-info__title">Description</h2>
        <p className="property-info__description-text">{description}</p>
      </div>

      <ul className="property-info__list">
        {categories.map(({ id, name }) => (
          <li key={id}>
            <span className="property-info__category">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

PropertyInfo.propTypes = {
  property: PropTypes.object.isRequired,
};
