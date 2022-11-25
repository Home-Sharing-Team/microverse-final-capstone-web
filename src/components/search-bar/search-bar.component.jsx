import Icon from '../icon/icon.component';
import './search-bar.styles.scss';

export function SearchBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="search">
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
