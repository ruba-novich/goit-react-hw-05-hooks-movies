const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4f82ed1427d5ffdf5673256bc4f7ef74';
const imgPage = 1;

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}
//список самых популярных фильмов на сегодня для создания коллекции на главной странице.
//https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key></api_key></api_key>>

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
}

// поиск кинофильма по ключевому слову на странице фильмов.
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export function fetchSearchMovies(query = '') {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${imgPage}&include_adult=false&query=${query}`,
  );
}

// запрос полной информации о фильме для страницы кинофильма.
//https:api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

// запрос информации о актёрском составе для страницы кинофильма
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
//api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export function fetchMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

// запрос обзоров для страницы кинофильма.
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US
export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
}
