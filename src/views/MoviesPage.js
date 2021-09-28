import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import SearchMovie from '../components/SearchMovie';
import MoviesList from '../components/MoviesList';
import * as movieApi from '../service/movie-api';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();
  const searchUrl = new URLSearchParams(location.search).get('query') ?? '';

  // console.log('movies', movies);

  useEffect(() => {
    if (!query) {
      return;
    }

    movieApi
      .fetchSearchMovies(query)
      .then(response => {
        setMovies(response.results);
        // console.log('response.results', response.results);
      })
      .catch(error => alert('ERROR FETCH'));
  }, [query]);

  useEffect(() => {
    if (searchUrl === '') {
      return;
    }
    setQuery(searchUrl);
  }, [searchUrl]);

  const onChangeQuery = query => {
    setQuery(query);
    setHistory(query);
  };

  const setHistory = query => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <SearchMovie onSubmit={onChangeQuery} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
