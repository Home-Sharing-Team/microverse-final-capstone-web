/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Icon from '../icon/icon.component';
import { Logo } from '../logo/logo.component';
import { SearchBar } from '../search-bar/search-bar.component';

import './sidebar.styles.scss';

export function Sidebar({ handleCloseBtnClick, isActive = false }) {
  return (
    <nav className={`sidebar ${isActive ? 'sidebar--active' : ''}`}>
      <header className="sidebar__header">
        <button
          className="sidebar__btn"
          type="button"
          onClick={handleCloseBtnClick}
        >
          <Icon name="x" size="md" />
        </button>
        <Link className="sidebar__logo" to="/">
          <Logo />
        </Link>
      </header>
      <div className="sidebar__search">
        <SearchBar />
      </div>
      <div className="sidebar__content">
        <h3 className="sidebar__title">For Guests</h3>
        <ul className="sidebar__list">
          <li className="sidebar__item sidebar__item--active">
            <Link to="/" className="sidebar__link">
              <Icon size="md" name="globe" />
              <span>Find a home</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/" className="sidebar__link">
              <Icon size="md" name="calendar" />
              <span>My reservations</span>
            </Link>
          </li>
        </ul>

        <h3 className="sidebar__title">For Hosts</h3>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link to="/" className="sidebar__link">
              <Icon size="md" name="home" />
              <span>My properties</span>
            </Link>
          </li>
        </ul>

        <div className="sidebar__legal">
          &copy; 2022 by HomeSharing. All rights reserved.
        </div>
      </div>
    </nav>
  );
}

Sidebar.propTypes = {
  isActive: PropTypes.string,
  handleCloseBtnClick: PropTypes.func.isRequired,
};
