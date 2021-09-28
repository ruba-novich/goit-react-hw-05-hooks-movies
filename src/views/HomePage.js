import { useState, useEffect } from 'react';
import * as movieApi from '../service/movie-api';
import MoviesList from '../components/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieApi.fetchTrending().then(movies => {
      setMovies(movies.results);
      // console.log(movies);
    });
  }, []);

  return <>{movies && <MoviesList movies={movies} />}</>;
}
