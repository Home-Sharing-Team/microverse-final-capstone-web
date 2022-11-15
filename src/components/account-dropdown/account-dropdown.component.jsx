/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { HeaderDropdown } from '../header-dropdown/header-dropdown.component';
import Icon from '../icon/icon.component';
import { RoundIcon } from '../round-icon/round-icon.component';
import userAvatar from '../../assets/images/avatar_placeholder.jpg';

import { signOut } from '../../redux/user/user.actions';
import './account-dropdown.styles.scss';

export function AccountDropdown({ user, handleLinkClick }) {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    handleLinkClick();
  };

  return (
    <HeaderDropdown>
      <header className="account-dropdown__header">
        <div className="account-dropdown__header-top">
          <img
            src={user.avatar ? user.avatar : userAvatar}
            alt="user avatar"
            className="account-dropdown__user-img"
          />
          <h2 className="account-dropdown__title">{user.name}</h2>
        </div>
        <Link className="account-dropdown__outline-link" to="/">View Profile</Link>
      </header>
      <div className="account-dropdown__content">
        <ul className="account-dropdown__list">
          <li>
            <Link onClick={handleLinkClick} to="/" className="account-dropdown__link">
              <RoundIcon>
                <Icon name="edit" size="sm" />
              </RoundIcon>
              <h3 className="account-dropdown__link-title">Edit profile</h3>
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/" className="account-dropdown__link">
              <RoundIcon>
                <Icon name="settings" size="sm" />
              </RoundIcon>
              <h3 className="account-dropdown__link-title">Settings</h3>
            </Link>
          </li>
        </ul>

        <hr className="account-dropdown__divider" />

        <ul className="account-dropdown__list">
          <li>
            <button onClick={handleSignOut} type="button" className="account-dropdown__link">
              <RoundIcon>
                <Icon name="log-out" size="sm" />
              </RoundIcon>
              <h3 className="account-dropdown__link-title">Sign Out</h3>
            </button>
          </li>
        </ul>
      </div>
    </HeaderDropdown>
  );
}

AccountDropdown.propTypes = {
  user: PropTypes.object.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};
