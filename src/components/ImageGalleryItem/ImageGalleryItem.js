import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ image, onClick }) {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <li className={styles.item}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.image}
        onClick={() => onClick(largeImageURL, tags)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
