import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handelChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handelSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Enter a query!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.header}>
        <form className={styles.form} onSubmit={this.handelSubmit}>
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
            onChange={this.handelChange}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
