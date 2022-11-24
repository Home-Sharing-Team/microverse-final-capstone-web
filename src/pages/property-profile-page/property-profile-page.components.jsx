import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CreateHostingPopup } from '../../components/create-hosting-popup/create-hosting-popup.component';
import { HostingsView } from '../../components/hostings-view/hostings-view.component';
import Icon from '../../components/icon/icon.component';
import { PropertyDetailsHeader } from '../../components/property-details-header/property-details-header.component';
import { SimpleCard } from '../../components/simple-card/simple-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { fetchSelectedPropertyAsync } from '../../redux/property/property.actions';
import { selectPropertyIsLoading, selectSelectedProperty } from '../../redux/property/property.selectors';

import './property-profile-page.styles.scss';

export function PropertyProfilePage() {
  const dispatch = useDispatch();
  const { propertyId } = useParams();
  const property = useSelector(selectSelectedProperty);
  const isLoading = useSelector(selectPropertyIsLoading);
  const [isCreateHostingOpen, setIsCreateHostingOpen] = useState(false);

  const openCreateHostingPopup = () => {
    setIsCreateHostingOpen(true);
  };

  const closeCreateHostingPopup = () => {
    setIsCreateHostingOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSelectedPropertyAsync(propertyId));
  }, []);

  return (
    isLoading ? (
      <Spinner />
    ) : (
      <div className="property-profile">
        {
            !property ? (
              <p>Error: property not found!</p>
            ) : (
              <>
                <PropertyDetailsHeader property={property} />
                <div className="property-profile__content">
                  <SimpleCard>
                    <div className="property-profile-info">
                      <header className="property-profile-info__header">
                        <h2 className="property-profile-info__title">Description</h2>
                        <ul className="bullet-list">
                          <li>
                            <span>{`${property.guest_capacity} guests`}</span>
                          </li>
                          <li>
                            <span>{`${property.bedrooms} bedrooms`}</span>
                          </li>
                          <li>
                            <span>{`${property.beds} beds`}</span>
                          </li>
                          <li>
                            <span>{`${property.baths} baths`}</span>
                          </li>
                        </ul>
                      </header>
                      <div className="property-profile-info__content">
                        <p className="property-profile-info__description">{property.description}</p>
                        <div className="property-profile-info__box">
                          <ul className="property-profile-info__list">
                            {property.categories.map(({ id, name }) => (
                              <li key={id}>
                                <span className="property-profile-info__category">{name}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="property-profile-info__action">
                            <button
                              type="button"
                              className="property-profile-info__btn"
                            >
                              <Icon size="sm" name="trash" />
                              <span>Delete</span>
                            </button>
                            <button
                              type="button"
                              className="property-profile-info__btn"
                            >
                              <Icon size="sm" name="share-2" />
                              <span>Publish</span>
                            </button>
                          </div>
                        </div>

                      </div>

                    </div>
                  </SimpleCard>
                  <SimpleCard>
                    <HostingsView
                      hostings={property.hostings}
                      handleClick={openCreateHostingPopup}
                    />
                  </SimpleCard>
                  {
                      isCreateHostingOpen && (
                      <CreateHostingPopup
                        handleClosePopup={closeCreateHostingPopup}
                      />
                      )
                  }
                </div>
              </>
            )
          }
      </div>
    )
  );
}
