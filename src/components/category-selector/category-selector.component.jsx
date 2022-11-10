import PropTypes from 'prop-types';

import ScrollContainer from 'react-indiana-drag-scroll';

import './category-selector.styles.scss';

export function CategorySelector({
  categories,
  handleCategoryButtonClick,
  allButtonId,
  activeButtonId,
}) {
  return (
    <ScrollContainer className="category-selector">
      <button
        type="button"
        className={`category-selector-btn ${
          activeButtonId === allButtonId
            ? 'category-selector-btn--active'
            : ''
        }`}
        onClick={() => { handleCategoryButtonClick(allButtonId); }}
      >
        All
      </button>
      {
        categories.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => { handleCategoryButtonClick(id); }}
            type="button"
            className={`category-selector-btn ${
              activeButtonId === id ? 'category-selector-btn--active' : ''
            }`}
          >
            {name}
          </button>
        ))
}
    </ScrollContainer>
  );
}

CategorySelector.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    }),
  ).isRequired,
  handleCategoryButtonClick: PropTypes.func.isRequired,
  allButtonId: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  activeButtonId: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
};
