import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePreview from '../MoviePreview';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, match, location }) => {
  let movieUrl = match.url.includes('movies') ? '' : 'movies';

  return (
    <ul className={styles.MovieList}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.MovieItem}>
          <NavLink
            className={styles.MovieListItem}
            to={{
              pathname: `${match.url}${movieUrl}/${movie.id}`,
              state: { from: location },
            }}
          >
            <MoviePreview movie={movie} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
