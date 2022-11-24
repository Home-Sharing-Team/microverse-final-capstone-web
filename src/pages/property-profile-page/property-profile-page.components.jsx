import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CreateHostingPopup } from '../../components/create-hosting-popup/create-hosting-popup.component';
import { HostingsView } from '../../components/hostings-view/hostings-view.component';
import Icon from '../../components/icon/icon.component';
import { PropertyDetailsHeader } from '../../components/property-details-header/property-details-header.component';
import { SimpleCard } from '../../components/simple-card/simple-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { useToast } from '../../hooks/toast.hook';
import { createPropertyHostingAsync, deletePropertyHostingAsync, setPropertyHostings } from '../../redux/hosting/hosting.actions';
import { selectPropertyHostings } from '../../redux/hosting/hosting.selectors';
import { fetchSelectedPropertyAsync, updatePropertyIsPublicAsync } from '../../redux/property/property.actions';
import { selectPropertyIsLoading, selectSelectedProperty } from '../../redux/property/property.selectors';
import { setStatusMessage } from '../../redux/status/status.actions';
import { selectStatusMessage } from '../../redux/status/status.selectors';
import { deletePropertyFromApi } from '../../services/api.service';

import './property-profile-page.styles.scss';

export function PropertyProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const property = useSelector(selectSelectedProperty);
  const hostings = useSelector(selectPropertyHostings);
  const isLoading = useSelector(selectPropertyIsLoading);
  const { addToast } = useToast();
  const statusMessage = useSelector(selectStatusMessage);
  const [isCreateHostingOpen, setIsCreateHostingOpen] = useState(false);

  const openCreateHostingPopup = () => {
    setIsCreateHostingOpen(true);
  };

  const closeCreateHostingPopup = () => {
    setIsCreateHostingOpen(false);
  };

  const publishProperty = () => {
    if (hostings.length > 0) {
      dispatch(updatePropertyIsPublicAsync({
        isPublic: true,
        propertyId: property.id,
      }));
    } else {
      dispatch(setStatusMessage({
        type: 'error',
        message: 'You need at least one rental rate available to publish your property. Create one first!',
      }));
    }
  };

  const unpublishProperty = () => {
    dispatch(updatePropertyIsPublicAsync({
      isPublic: false,
      propertyId: property.id,
    }));
  };

  const handleDeleteProperty = async () => {
    try {
      await deletePropertyFromApi(property.id);

      dispatch(setStatusMessage({
        type: 'success',
        message: 'Property deleted successfully.',
      }));

      navigate('/');
    } catch (error) {
      dispatch(setStatusMessage({
        type: 'error',
        message: error.message,
      }));
    }
  };

  const handleCreateHosting = (hostingData) => {
    const dataToCreateNewHosting = {
      ...hostingData,
      cleaningFee: hostingData.cleaningFee || 0,
      propertyId: property.id,
    };

    dispatch(createPropertyHostingAsync(dataToCreateNewHosting));
  };

  const handleDeleteHosting = (hostingId) => {
    if (property.is_public) {
      dispatch(setStatusMessage({
        type: 'error',
        message: 'A public property needs to have at least one available rental rate! Unpublish this property first to be able to delete this rental rate.',
      }));
    } else {
      dispatch(deletePropertyHostingAsync(hostingId));
    }
  };

  useEffect(() => {
    dispatch(fetchSelectedPropertyAsync(propertyId));
  }, []);

  useEffect(() => {
    if (property) {
      dispatch(setPropertyHostings(property.hostings));
    }
  }, [property]);

  useEffect(() => {
    if (statusMessage) {
      const { type } = statusMessage;

      if (type === 'error') {
        addToast(statusMessage);
      } else {
        addToast(statusMessage);
        closeCreateHostingPopup();
      }
    }
  }, [statusMessage]);

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
                              onClick={handleDeleteProperty}
                            >
                              <Icon size="sm" name="trash" />
                              <span>Delete</span>
                            </button>
                            {
                                property.is_public ? (
                                  <button
                                    type="button"
                                    className="property-profile-info__btn"
                                    onClick={unpublishProperty}
                                  >
                                    <Icon size="sm" name="lock" />
                                    <span>Unpublish</span>
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    className="property-profile-info__btn"
                                    onClick={publishProperty}
                                  >
                                    <Icon size="sm" name="share-2" />
                                    <span>Publish</span>
                                  </button>
                                )
                              }

                          </div>
                        </div>

                      </div>

                    </div>
                  </SimpleCard>
                  <SimpleCard>
                    <HostingsView
                      hostings={hostings}
                      handleClick={openCreateHostingPopup}
                      handleDeleteHosting={handleDeleteHosting}
                    />
                  </SimpleCard>
                  {
                      isCreateHostingOpen && (
                        <CreateHostingPopup
                          hostings={hostings}
                          handleClosePopup={closeCreateHostingPopup}
                          handleCreateHosting={handleCreateHosting}
                          handleDeleteHosting={handleDeleteHosting}
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
