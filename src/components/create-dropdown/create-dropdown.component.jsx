import { Link } from 'react-router-dom';
import { HeaderDropdown } from '../header-dropdown/header-dropdown.component';
import Icon from '../icon/icon.component';
import { RoundIcon } from '../round-icon/round-icon.component';

import './create-dropdown.styles.scss';

export function CreateDropdown() {
  return (
    <HeaderDropdown title="create">
      <div className="create-dropdown__content">
        <ul className="create-dropdown__list">
          <li>
            <Link to="/" className="create-dropdown__link">
              <RoundIcon>
                <Icon name="home" size="sm" />
              </RoundIcon>
              <div className="create-dropdown__link-content">
                <h3 className="create-dropdown__link-title">Property</h3>
                <p className="create-dropdown__link-text">
                  Host your property
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </HeaderDropdown>
  );
}
