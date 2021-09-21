import { Component } from 'react';
import styles from './SearchMovie.module.css';

class SearchMovie extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles.SerchBtn}>
          <span className={styles.BtnText}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchMovie;
