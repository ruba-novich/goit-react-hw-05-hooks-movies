import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ movie }) => {
  return (
    <div>
      {!movie.poster_path ? (
        <p>No img</p>
      ) : (
        <img
          className={styles.MovieListImg}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.original_title}
        />
      )}
      <p className={styles.MovieListTitle}>{movie.title}</p>
    </div>
  );
};
MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviePreview;
