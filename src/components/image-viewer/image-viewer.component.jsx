import PropTypes from 'prop-types';
import { useState } from 'react';

import { ThumbnailSelector } from '../thumbnail-selector/thumbnail-selector.component';

import './image-viewer.styles.scss';

export function ImageViewer({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleClickImage = (imageId) => {
    const image = images.find((image) => image.id === imageId);
    setSelectedImage(image);
  };

  return (
    <div className="image-viewer">
      <img src={selectedImage.source} alt="" className="image-viewer__img" />
      <div className="image-viewer__selector">
        {
          images.length > 1 && (
          <ThumbnailSelector
            images={images}
            handleClick={handleClickImage}
            activeThumbnailId={selectedImage.id}
          />
          )
        }
      </div>
    </div>
  );
}

ImageViewer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      source: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
