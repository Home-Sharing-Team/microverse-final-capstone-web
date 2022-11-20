/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import pluralize from 'pluralize';
import Icon from '../../components/icon/icon.component';

import Spinner from '../../components/spinner/spinner.component';
import { fetchSelectedPropertyAsync } from '../../redux/property/property.actions';
import {
  selectPropertyIsLoading,
  selectSelectedProperty,
} from '../../redux/property/property.selectors';

import { SimpleCard } from '../../components/simple-card/simple-card.component';
import { ImageViewer } from '../../components/image-viewer/image-viewer.component';
import { PropertyInfo } from '../../components/property-info/property-info.component';
import { ReservationSummary } from '../../components/reservation-summary/reservation-summary.components';
import { DatePicker } from '../../components/date-picker/date-picker.component';

import './property-details-page.styles.scss';
import { resetSelectedReservation } from '../../redux/reservation/reservation.actions';
import { ReservationCheckout } from '../../components/reservation-checkout/reservation-checkout.component';
import { ReservationTitle } from '../../components/reservation-title/reservation-title.component';
import { ReservationButton } from '../../components/reservation-button/reservation-button.component';
import { selectNumNights } from '../../redux/reservation/reservation.selectors';

export function PropertyDetailsPage() {
  const dispatch = useDispatch();
  const { propertyId } = useParams();
  const property = useSelector(selectSelectedProperty);
  const isLoading = useSelector(selectPropertyIsLoading);
  const [isReservationCheckoutOpen, setIsReservationCheckoutOpen] = useState(false);
  const numNights = useSelector(selectNumNights);

  const openReservationCheckoutPopup = () => {
    setIsReservationCheckoutOpen(true);
  };

  const closeReservationCheckoutPopup = () => {
    setIsReservationCheckoutOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSelectedPropertyAsync(propertyId));
    dispatch(resetSelectedReservation());
  }, []);

  return (
    <div className="property-details">
      {isLoading ? (
        <Spinner />
      ) : !property ? (
        <p>Error: property not found!</p>
      ) : (
        <>

          <header className="property-details__header">
            <SimpleCard>
              <div className="property-details__header-top">
                <h1 className="property-details__title">{property.name}</h1>
              </div>
              <div className="property-details__header-bottom">
                <ul className="bullet-list">
                  <li>
                    <div className="property-details__text-box">
                      <Icon name="minimize" size="xsm" />
                      <span>
                        {`${property.size} m`}
                        <sup>2</sup>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="property-details__text-box">
                      <Icon name="map-pin" size="xsm" />
                      <span>{`${property.address.city}, ${property.address.country}`}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </SimpleCard>
            <ImageViewer images={property.images} />
          </header>

          <div className="property-details__content">
            <div className="property-details__left">
              <SimpleCard>
                <PropertyInfo property={property} />
              </SimpleCard>

              <SimpleCard>
                <DatePicker
                  minStay={3}
                  blockedPeriods={property.blocked_periods}
                />
              </SimpleCard>
            </div>
            <div className="property-details__right">
              <ReservationSummary handleReserveBtnClick={openReservationCheckoutPopup} />
            </div>
          </div>

          {isReservationCheckoutOpen && (
            <ReservationCheckout
              handleClosePopup={closeReservationCheckoutPopup}
            />
          )}

          <footer className="property-details__footer">
            <div className="property-details__footer-left">
              <ReservationTitle size="sm" />
              <p className="property-details__footer-text">
                {numNights > 0 ? `${pluralize('night', numNights, true)} selected` : `Minimum stay: ${pluralize(
                  property.min_cycle_hosting.cycle,
                  property.min_cycle_hosting.minimum_cycle_amount,
                  true,
                )}`}
              </p>
            </div>
            <div className="property-details__footer-right">
              <ReservationButton handleClick={openReservationCheckoutPopup} />
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
