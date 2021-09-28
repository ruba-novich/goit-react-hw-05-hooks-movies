import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePreview from '../MoviePreview';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  // const history = useHistory();
  const match = useRouteMatch();
  let movieUrl = match.url.includes('movies')
    ? match.url
    : `${match.url}movies`;
  // console.log('locationMoviesList', location);
  // console.log('history', history);
  // console.log('movies', movies);
  // console.log('match', match);

  // console.log('movieUrl', movieUrl);

  return (
    <>
      {movies && (
        <ul className={styles.MovieList}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.MovieItem}>
              <Link
                className={styles.MovieListItem}
                to={{
                  pathname: `${movieUrl}/${movie.id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {movie && <MoviePreview movie={movie} />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
