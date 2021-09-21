import React from 'react';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ movie }) => {
  return (
    <div>
      <img
        className={styles.MovieListImg}
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.original_title}
      />
      <p className={styles.MovieListTitle}>{movie.title}</p>
    </div>
  );
};
export default MoviePreview;
