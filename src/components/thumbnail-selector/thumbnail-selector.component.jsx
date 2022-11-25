import PropTypes from 'prop-types';
import ScrollContainer from 'react-indiana-drag-scroll';

import './thumbnail-selector.styles.scss';

export function ThumbnailSelector({
  images,
  handleClick,
  activeThumbnailId,
}) {
  return (
    <ScrollContainer className="thumbnail-selector">
      {images.map(({ id, source }) => (
        <button
          type="button"
          onClick={() => { handleClick(id); }}
          className={`thumbnail-selector__btn ${
            activeThumbnailId === id ? 'thumbnail-selector__btn--active' : ''
          }`}
          key={id}
        >
          <img className="thumbnail-selector__img" src={source} alt="" />
        </button>
      ))}
    </ScrollContainer>
  );
}

ThumbnailSelector.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      source: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  activeThumbnailId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
