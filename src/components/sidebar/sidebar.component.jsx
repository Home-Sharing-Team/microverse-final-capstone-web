/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Icon from '../icon/icon.component';
import { Logo } from '../logo/logo.component';
import { SearchBar } from '../search-bar/search-bar.component';

import './sidebar.styles.scss';

const getSidebarLinksSections = (currentUser) => {
  const userId = currentUser ? currentUser.id : 'invalid-id';

  return [
    {
      sectionId: 1,
      sectionTitle: 'For Guests',
      iconsSize: 'md',
      links: [
        {
          id: 1,
          route: '/',
          title: 'Find a home',
          iconName: 'globe',
          isVisible: true,
        },
        {
          id: 2,
          route: '/reservations',
          title: 'My reservations',
          iconName: 'calendar',
          isVisible: !!currentUser,
        },
      ],
    },
    {
      sectionId: 2,
      sectionTitle: 'For Hosts',
      iconsSize: 'md',
      links: [
        {
          id: 1,
          route: `users/${userId}/properties`,
          title: 'My properties',
          iconName: 'home',
          isVisible: !!currentUser,
        },
      ],
    },
  ];
};

export function Sidebar({ handleCloseBtnClick, isActive = false }) {
  const currentUser = useSelector(selectCurrentUser);

  const linksSections = getSidebarLinksSections(currentUser);

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
        {linksSections.map(({
          sectionId, sectionTitle, iconsSize, links,
        }) => {
          const isSectionVisible = links.some(({ isVisible }) => isVisible);

          return (
            isSectionVisible && (
              <Fragment key={sectionId}>
                <h3 className="sidebar__title">{sectionTitle}</h3>
                <ul className="sidebar__list">
                  {links.map(
                    ({
                      id, route, title, iconName, isVisible,
                    }) => isVisible && (
                    <li key={id} className="sidebar__item">
                      <NavLink
                        to={route}
                        className={({ isActive }) => (isActive
                          ? 'sidebar__link sidebar__link--active'
                          : 'sidebar__link')}
                      >
                        <div className="sidebar__link-content">
                          <Icon size={iconsSize} name={iconName} />
                          <span>{title}</span>
                        </div>
                      </NavLink>
                    </li>
                    ),
                  )}
                </ul>
              </Fragment>
            )
          );
        })}

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
