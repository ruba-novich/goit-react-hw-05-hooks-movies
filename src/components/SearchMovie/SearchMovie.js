import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchMovie.module.css';

const SearchMovie = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      alert('Please add search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SerchBtn}>
        <span className={styles.BtnText}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};
SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchMovie;
