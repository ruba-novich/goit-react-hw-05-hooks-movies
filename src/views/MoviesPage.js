import { Component } from 'react';
import SearchMovie from '../components/SearchMovie';
import MoviesList from '../components/MoviesList';
import Axios from 'axios';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
    imgPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    this.setState({ query: query });
  };

  async fetchMovies() {
    const API_KEY = '4f82ed1427d5ffdf5673256bc4f7ef74';
    const { query, imgPage } = this.state;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${imgPage}&include_adult=false&query=${query}`,
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <SearchMovie onSubmit={this.onChangeQuery} />
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
