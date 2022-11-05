import { Link } from 'react-router-dom';

import './header.styles.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__start">
        <Link className="header__logo" to="/">
          <span className="header__logo-text">Home Sharing</span>
        </Link>
      </div>

      <div className="header__center">
        Search bar
      </div>

      <div className="header__end">
        buttons
      </div>
    </header>
  );
}
