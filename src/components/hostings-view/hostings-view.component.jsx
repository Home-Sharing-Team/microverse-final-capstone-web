/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import ScrollContainer from 'react-indiana-drag-scroll';
import { HostingCard } from '../hosting-card/hosting-card.component';
import Icon from '../icon/icon.component';

import './hostings-view.styles.scss';

export function HostingsView({
  hostings,
  handleClick,
  handleDeleteHosting,
}) {
  return (
    <div className="hostings-view">
      <header className="hostings-view__header">
        <h2 className="hostings-view__title">
          Rental rates
        </h2>
        {
          hostings.length < 3 ? (
            <button onClick={handleClick} type="button" className="hostings-view__btn">
              <Icon size="sm" name="plus" />
            </button>
          ) : (
            <p className="hostings-view__count">
              3/3 items
            </p>
          )
        }
      </header>
      {
        hostings.length > 0 ? (
          <ScrollContainer>
            <ul className="hostings-view__list">
              {
                hostings.map((hosting) => (
                  <li key={hosting.id}>
                    <HostingCard
                      handleDeleteHosting={handleDeleteHosting}
                      hosting={hosting}
                    />
                  </li>
                ))
              }
            </ul>
          </ScrollContainer>
        ) : (
          <p>
            No rental rates available for this property yet. Create one!
            <br />
            <strong>You need at least one rental rate available to publish your property.</strong>
          </p>
        )
      }
    </div>
  );
}

HostingsView.propTypes = {
  hostings: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDeleteHosting: PropTypes.func.isRequired,
};
