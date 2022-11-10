import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Icon from '../icon/icon.component';
import userAvatar from '../../assets/images/avatar_placeholder.jpg';

import './header.styles.scss';
import { RoundIcon } from '../round-icon/round-icon.component';
import { CreateDropdown } from '../create-dropdown/create-dropdown.component';
import { AccountDropdown } from '../account-dropdown/account-dropdown.component';
import { AuthDropdown } from '../auth-dropdown/auth-dropdown.component';
import { SearchBar } from '../search-bar/search-bar.component';
import { Logo } from '../logo/logo.component';

const defaultSelectedDropdown = {
  name: '',
  element: null,
};

export function Header({ handleHamburgerBtnClick }) {
  const user = useSelector(selectCurrentUser);
  const [selectedDropdown, setSelectedDropdown] = useState(
    defaultSelectedDropdown,
  );

  const headerDropdowns = {
    create: <CreateDropdown />,
    account: <AccountDropdown user={user} />,
    auth: <AuthDropdown />,
  };

  const toggleDropdown = (dropdownName) => {
    let name;
    let element;

    if (dropdownName !== selectedDropdown.name) {
      name = dropdownName;
      element = headerDropdowns[dropdownName];
    } else {
      name = '';
      element = null;
    }

    setSelectedDropdown({
      name,
      element,
    });
  };

  return (
    <>

      <header className="header">
        <div className="header__start">
          <button
            className="header__btn header__hamburger-btn"
            type="button"
            onClick={handleHamburgerBtnClick}
          >
            <Icon name="menu" size="md" />
          </button>
          <Link className="header__logo" to="/">
            <Logo />
          </Link>
        </div>

        <div className="header__center">
          <SearchBar />
        </div>

        <div className="header__end">
          {user ? (
            <ul className="header__list">
              <li>
                <button
                  onClick={() => {
                    toggleDropdown('create');
                  }}
                  className="header__btn"
                  type="button"
                >
                  <RoundIcon size="md">
                    <Icon name="plus" size="sm" />
                  </RoundIcon>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleDropdown('account');
                  }}
                  className="header__btn"
                  type="button"
                >
                  <img src={userAvatar} alt="user avatar" />
                </button>
              </li>
            </ul>
          ) : (
            <button
              onClick={() => {
                toggleDropdown('auth');
              }}
              className="header__auth-btn"
              type="button"
            >
              <Icon name="menu" size="sm" />
              <Icon name="user" size="sm" />
            </button>
          )}
        </div>
      </header>
      {selectedDropdown.element && selectedDropdown.element}
    </>
  );
}

Header.propTypes = {
  handleHamburgerBtnClick: PropTypes.func.isRequired,
};
