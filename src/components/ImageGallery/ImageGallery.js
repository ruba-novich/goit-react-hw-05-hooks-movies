import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';

import fetchImageApi from '../../service/image-api';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  currentPage: 1,
  pageSize: 12,
  apiKay: '19388230-75c4bcf9e22da5087bb0ddd0d',
  hits: [],
  showModal: false,
  error: null,
  largeImage: '',
  imgTags: '',
};

export default class ImageGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };
  state = {
    status: 'idle',
    ...INITIAL_STATE,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'panding', ...INITIAL_STATE });
      this.fetchImages();

      // console.log('prevProps.searchQuery', prevProps.searchQuery);
      // console.log('this.props.searchQuery', this.props.searchQuery);
      // console.log('this.state', this.state);
    }
    if (
      this.state.currentPage !== 2 &&
      prevState.currentPage !== this.state.currentPage
    ) {
      this.smoothTransition();
    }
  }

  fetchImages = () => {
    const { currentPage, pageSize, apiKay } = this.state;
    const { searchQuery } = this.props;

    fetchImageApi({ searchQuery, apiKay, currentPage, pageSize })
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
          status: 'resolved',
        }));
      })
      .catch(error =>
        this.setState({ error: 'Picture not found', status: 'rejected' }),
      );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onShowModal = largeImage => {
    this.setState({ largeImage });

    this.toggleModal();
  };
  smoothTransition = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { hits, status, error, showModal, largeImage, imgTags } = this.state;

    if (status === 'idle') {
      return (
        <h1 className={styles.title}>
          Enter a query by name to search, image or photo
        </h1>
      );
    }
    if (status === 'panding') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1>{error}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={styles.ImageGallery}>
            <ImageGalleryItem hits={hits} onClick={this.onShowModal} />
          </ul>
          {showModal && (
            <Modal onClick={this.onShowModal}>
              <img src={largeImage} alt={imgTags} />
            </Modal>
          )}
          <Button onClick={this.fetchImages} type="button" />
        </>
      );
    }
  }
}
