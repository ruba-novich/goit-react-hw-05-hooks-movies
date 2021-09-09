import { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Api from '../src/service/image-api';

import 'modern-normalize/modern-normalize.css';
import './styles.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [status, setStatus] = useState(Status.IDLE);
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [error, setError] = useState(null);

  const handelFormSubmit = value => {
    setQuery(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setStatus(Status.IDLE);

    Api.fetchImage({ query, currentPage })
      .then(hits => {
        if (currentPage > 1) {
          setHits(state => [...state, ...hits]);
          setStatus(Status.RESOLVED);
          smoothTransition();
        } else {
          setHits(hits);
          setStatus(Status.RESOLVED);
        }
      })
      .catch(error => {
        setError('Picture not found');
        setStatus(Status.REJECTED);
      });
  }, [currentPage, query]);

  const updatePage = () => {
    setCurrentPage(state => state + 1);
  };

  const smoothTransition = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  if (status === 'idle') {
    return (
      <div className="app">
        <SearchBar onSubmit={handelFormSubmit} />
        <h1 className="title">
          Enter a query by name to search, image or photo
        </h1>
      </div>
    );
  }
  if (status === 'panding') {
    return (
      <div className="app">
        <SearchBar onSubmit={handelFormSubmit} />
        <Loader />;
      </div>
    );
  }
  if (status === 'rejected') {
    return (
      <div className="app">
        <SearchBar onSubmit={handelFormSubmit} />
        <h1>{error}</h1>
      </div>
    );
  }
  if (status === 'resolved') {
    return (
      <div className="app">
        <SearchBar onSubmit={handelFormSubmit} />
        <ImageGallery gallery={hits} updatePage={updatePage} />
      </div>
    );
  }
}
