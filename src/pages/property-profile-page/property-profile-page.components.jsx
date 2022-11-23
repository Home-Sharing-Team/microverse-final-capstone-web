import pluralize from 'pluralize';
import { useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CreateHostingForm } from '../../components/create-hosting-form/create-hosting-form.component';
import { HostingCard } from '../../components/hosting-card/hosting-card.component';
import Icon from '../../components/icon/icon.component';
import { Popup } from '../../components/popup/popup.component';
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
                    <div className="hostings">
                      <header className="hostings__header">
                        <h2 className="hostings__title">
                          Pricings
                        </h2>
                        <span className="hostings__count">
                          {`${property.hostings.length}/3 ${pluralize('item', property.hostings.length)}`}
                        </span>
                      </header>
                      <ScrollContainer>
                        <ul className="hostings__list">
                          {
                              property.hostings.length < 3 && (
                                <li>
                                  <button type="button" className="hostings__btn">
                                    <Icon size="lg" name="plus" />
                                  </button>
                                </li>
                              )
                            }
                          {
                              property.hostings.map((hosting) => (
                                <li key={hosting.id}>
                                  <HostingCard hosting={hosting} />
                                </li>
                              ))
                              }
                        </ul>
                      </ScrollContainer>
                    </div>
                  </SimpleCard>

                  <Popup>
                    <div className="create-hosting-popup">
                      <CreateHostingForm />
                    </div>
                  </Popup>

                </div>
              </>
            )
          }
      </div>
    )
  );
}
