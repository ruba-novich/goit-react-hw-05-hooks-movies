import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const initialQuery = '';

  const [query, setQuery] = useState(initialQuery);

  const handelChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Enter a query!');
      return;
    }
    onSubmit(query);

    setQuery(initialQuery);
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handelSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.label}> Search</span>
        </button>
        <input
          className={styles.input}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={query}
          onChange={handelChange}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
