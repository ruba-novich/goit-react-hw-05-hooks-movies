import { useState } from 'react';

import ImageGalleryItem from '../ImageGalleryItem';

import Button from '../Button';
import Modal from '../Modal';

import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ gallery, updatePage }) {
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [imgTags, setImageTags] = useState('');

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const onShowModal = (largeImage, imgTags) => {
    setLargeImage(largeImage);
    setImageTags(imgTags);

    toggleModal();
  };

  return (
    <>
      <ul className={styles.ImageGallery}>
        {gallery.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={onShowModal}
          />
        ))}
      </ul>
      {showModal && (
        <Modal onClick={onShowModal}>
          <img src={largeImage} alt={imgTags} />
        </Modal>
      )}
      <Button onClick={() => updatePage()} type="button" />
    </>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  updatePage: PropTypes.func.isRequired,
};
