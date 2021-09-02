import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    hits: PropTypes.array.isRequired,
  };
  onShowModal = largeImageURL => {
    this.props.onClick(largeImageURL);
  };

  render() {
    return this.props.hits.map(({ id, webformatURL, tags, largeImageURL }) => (
      <li className={styles.item} key={id}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.image}
          onClick={() => this.onShowModal(largeImageURL)}
        />
      </li>
    ));
  }
}
