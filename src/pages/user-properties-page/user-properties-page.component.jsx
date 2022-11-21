/* eslint-disable camelcase */
import pluralize from 'pluralize';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomSelector } from '../../components/custom-selector/custom-selector.component';
import { PropertiesGrid } from '../../components/properties-grid/properties-grid.component';
import { SectionTitle } from '../../components/section-title/section-title.component';
import { SimpleCard } from '../../components/simple-card/simple-card.component';
import { fetchUserPropertiesAsync } from '../../redux/property/property.actions';
import { selectUserProperties } from '../../redux/property/property.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './user-properties-page.styles.scss';

const PROPERTY_OPTIONS = {
  ALL: 'all',
  PRIVATE: 'private',
  PUBLIC: 'public',
};

const options = [
  {
    name: 'All',
    value: PROPERTY_OPTIONS.ALL,
  },
  {
    name: 'Private',
    value: PROPERTY_OPTIONS.PRIVATE,
  },
  {
    name: 'Public',
    value: PROPERTY_OPTIONS.PUBLIC,
  },
];

export function UserPropertiesPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const userProperties = useSelector(selectUserProperties);
  const [propertiesToShow, setPropertiesToShow] = useState([]);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchUserPropertiesAsync(currentUser.id));
    }
  }, [currentUser]);

  useEffect(() => {
    setPropertiesToShow(userProperties);
  }, [userProperties]);

  const handleSelectOption = (option) => {
    switch (option) {
      case PROPERTY_OPTIONS.PRIVATE:
        setPropertiesToShow(
          userProperties.filter(({ is_public }) => !is_public),
        );
        break;
      case PROPERTY_OPTIONS.PUBLIC:
        setPropertiesToShow(
          userProperties.filter(({ is_public }) => is_public),
        );
        break;
      default:
        setPropertiesToShow(userProperties);
        break;
    }
  };

  return (
    <section className="user-properties">
      <SimpleCard>
        <header className="user-properties__header">
          <SectionTitle
            title={pluralize('Property', propertiesToShow.length, true)}
          />
          <CustomSelector
            handleChangeCallback={handleSelectOption}
            defaultOption={PROPERTY_OPTIONS.ALL}
            options={options}
          />
        </header>
      </SimpleCard>

      <div className="user-properties__content">
        <PropertiesGrid properties={propertiesToShow} isListing={false} />
      </div>
    </section>
  );
}
