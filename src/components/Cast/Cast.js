import { Component } from 'react';
import MovieApi from '../../service/movie-api';

import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const urlQuery = `${movieId}/credits`;
    const response = await MovieApi(urlQuery);
    this.setState({ cast: response.data.cast });
  }

  render() {
    const { cast } = this.state;

    return (
      <ul className={styles.ActorList}>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={styles.ActorItem}>
            <div>
              {profile_path ? (
                <img
                  className={styles.ActorImg}
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              ) : (
                <p>No img</p>
              )}
            </div>
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
