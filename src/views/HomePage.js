import Axios from 'axios';
import { Component } from 'react';
import MoviesList from '../components/MoviesList';
import styles from './Movies.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const API_KEY = '4f82ed1427d5ffdf5673256bc4f7ef74';
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <ul className={styles.MovieList}>
        <MoviesList movies={movies} />
      </ul>
    );
  }
}

export default HomePage;
