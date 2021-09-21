import { Component, lazy } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import MovieApi from '../service/movie-api';
import Button from '../components/Button';
import styles from './Movies.module.css';

const Reviews = lazy(() => import('../components/Reviews'));
const Cast = lazy(() => import('../components/Cast'));

class MovieDetailsPage extends Component {
  state = {
    adult: null,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: null,
    genres: [],
    homepage: null,
    id: null,
    imdb_id: null,
    original_language: null,
    original_title: null,
    overview: null,
    popularity: null,
    poster_path: null,
    production_companies: [],
    production_countries: [],
    release_date: null,
    revenue: null,
    runtime: null,
    spoken_languages: [],
    status: null,
    tagline: null,
    title: null,
    video: null,
    vote_average: null,
    vote_count: null,
  };

  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const response = await MovieApi(movieId);
      this.setState({ ...response.data });
    } catch {
      this.setState({ redirect: null });
    }
  }

  render() {
    const {
      genres,
      id,
      title,
      poster_path,
      overview,
      vote_average,
      release_date,
      redirect,
    } = this.state;

    const { match } = this.props;
    const date = `${release_date}`.substr(0, 4);

    if (redirect === null) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Button />
        <div key={id} className={styles.MovieDetails}>
          <div className={styles.MoviePageImgBlock}>
            {poster_path ? (
              <img
                className={styles.MoviePageImgBlock}
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
              />
            ) : (
              <p className={styles.MoviePageNoimg}>No photo</p>
            )}
          </div>
          <div className={styles.MoviePageBlock}>
            <h1 className={styles.MovieTitle}>
              {title} ({date})
            </h1>
            <p>User Score: {vote_average * 10}%</p>
            <h2 className={styles.MovieTitle}>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.MoviePageMenu}>
          <h2>Additional information</h2>

          <ul>
            <li className={styles.DetailsItem}>
              <NavLink className={styles.Details} to={`${match.url}/Cast`}>
                Cast
              </NavLink>
            </li>
            <li className={styles.DetailsItem}>
              <NavLink className={styles.Details} to={`${match.url}/Reviews`}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path={`${match.path}/cast`} component={Cast} />

            <Route exact path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
