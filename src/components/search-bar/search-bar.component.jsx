import Icon from '../icon/icon.component';
import './search-bar.styles.scss';

export function SearchBar() {
  return (
    <form className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search destinations..."
      />
      <button type="submit" className="search__btn">
        <Icon size="sm" name="search" />
      </button>
    </form>
  );
}
