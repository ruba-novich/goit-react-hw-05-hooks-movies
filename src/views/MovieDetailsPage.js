import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import * as movieApi from '../service/movie-api';
import Button from '../components/Button';
import LoaderPage from '../components/Loader';
import styles from './Movies.module.css';

const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "reviews" */),
);
const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast" */),
);

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  // console.log('hirtory', history);
  // console.log('LocationMovieDetailsPage', location);
  // const { state } = history.location;
  // console.log('movie', movie)
  // console.log('movieId', movieId);
  // console.log('path', path);

  useEffect(() => {
    movieApi.fetchMovieById(movieId).then(movie => {
      // console.log('movieAPI', movie);
      setMovie(movie);
    });
  }, [movieId]);

  const onGoBackBtn = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <Button onClick={onGoBackBtn} />
          <div key={movie.id} className={styles.MovieDetails}>
            <div className={styles.MoviePageImgBlock}>
              {!movie.poster_path ? (
                <p className={styles.MoviePageNoimg}>No photo</p>
              ) : (
                <img
                  className={styles.MoviePageImgBlock}
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
            </div>
            <div className={styles.MoviePageBlock}>
              <h2 className={styles.MovieTitle}>{movie.title}</h2>
              <ul>
                <li>Release date: {movie.release_date}</li>
                <li>Popularity: {movie.popularity}</li>
                <li>User Score: {movie.vote_average * 10}%</li>
              </ul>
              <h2 className={styles.MovieTitle}>Overview</h2>
              <ul>
                <li>{movie.overview}</li>
              </ul>
              <h2 className={styles.MovieTitle}>Genres</h2>
              <ul>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>{name} </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.MoviePageMenu}>
            <h2 className={styles.MovieTitle}>Additional information</h2>
            <ul>
              <li className={styles.DetailsItem}>
                <NavLink
                  className={styles.Details}
                  to={{
                    pathname: `${url}/Cast`,
                    state: {
                      from: location?.state?.from ?? '/',
                    },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li className={styles.DetailsItem}>
                <NavLink
                  className={styles.Details}
                  to={{
                    pathname: `${url}/Reviews`,
                    state: {
                      from: location?.state?.from ?? '/',
                    },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<LoaderPage />}>
              <Switch>
                <Route exact path={`${path}/cast`} component={Cast} />
                <Route exact path={`${path}/reviews`} component={Reviews} />
              </Switch>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
