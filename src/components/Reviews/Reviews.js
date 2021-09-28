import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../../service/movie-api';

import styles from './Reviews.module.css';

const Reviews = () => {
  const [authors, setAuthors] = useState(null);
  // console.log('authors', authors);
  const { movieId } = useParams();
  useEffect(() => {
    movieApi.fetchMovieReviews(movieId).then(movie => {
      setAuthors(movie.results);
      // console.log(movie);
    });
  }, [movieId]);

  return (
    <>
      {authors && (
        <ul className={styles.ReviewsList}>
          {!authors.length ? (
            <h3 className={styles.Title}>
              We don't any reviews for this movie
            </h3>
          ) : (
            authors.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;
