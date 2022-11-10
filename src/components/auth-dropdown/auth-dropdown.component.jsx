import { Link } from 'react-router-dom';
import { HeaderDropdown } from '../header-dropdown/header-dropdown.component';
import Icon from '../icon/icon.component';
import { RoundIcon } from '../round-icon/round-icon.component';

import './auth-dropdown.styles.scss';

export function AuthDropdown() {
  return (
    <HeaderDropdown title="user session">
      <div className="auth-dropdown__content">
        <ul className="auth-dropdown__list">
          <li>
            <Link to="/sign-in" className="auth-dropdown__link">
              <RoundIcon>
                <Icon name="log-in" size="sm" />
              </RoundIcon>
              <h3 className="auth-dropdown__link-title">Sign In</h3>
            </Link>
          </li>
          <li>
            <Link to="/" className="auth-dropdown__link">
              <RoundIcon>
                <Icon name="user-plus" size="sm" />
              </RoundIcon>
              <h3 className="auth-dropdown__link-title">Sign Up</h3>
            </Link>
          </li>
        </ul>
      </div>
    </HeaderDropdown>
  );
}
