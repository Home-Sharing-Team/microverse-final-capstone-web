/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

import ScrollContainer from 'react-indiana-drag-scroll';
import { HostingCard } from '../hosting-card/hosting-card.component';
import Icon from '../icon/icon.component';

import './hostings-view.styles.scss';

export function HostingsView({ hostings, handleClick }) {
  return (
    <div className="hostings-view">
      <header className="hostings-view__header">
        <h2 className="hostings-view__title">
          Rental rates
        </h2>
        {
          hostings.length < 3 && (
          <button onClick={handleClick} type="button" className="hostings-view__btn">
            <Icon size="sm" name="plus" />
          </button>
          )
        }
      </header>
      <ScrollContainer>
        <ul className="hostings-view__list">
          {
            hostings.map((hosting) => (
              <li key={hosting.id}>
                <HostingCard hosting={hosting} />
              </li>
            ))
          }
        </ul>
      </ScrollContainer>
    </div>
  );
}

HostingsView.propTypes = {
  hostings: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};
