import { Component } from 'react';
import MovieApi from '../../service/movie-api';

import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    authors: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const urlQuery = `${movieId}/reviews`;

    const response = await MovieApi(urlQuery);

    this.setState({ authors: response.data.results });
  }
  render() {
    const { authors } = this.state;

    return (
      <ul className={styles.ReviewsList}>
        {!authors.length ? (
          <h2 lassName={styles.Title}>We don't any reviews for this movie</h2>
        ) : (
          authors.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    );
  }
}

export default Reviews;
