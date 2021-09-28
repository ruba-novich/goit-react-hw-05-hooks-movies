import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../../service/movie-api';

import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  // console.log('cast', cast);
  const { movieId } = useParams();
  // console.log('id', movieId);

  useEffect(() => {
    movieApi.fetchMovieCredits(movieId).then(movie => {
      setCast(movie.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={styles.ActorList}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={styles.ActorItem}>
              <div>
                {!profile_path ? (
                  <p>No img</p>
                ) : (
                  <img
                    className={styles.ActorImg}
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                )}
              </div>
              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
