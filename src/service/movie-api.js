import axios from 'axios';

const MovieApi = query => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = '4f82ed1427d5ffdf5673256bc4f7ef74';

  const response = axios.get(`${BASE_URL}${query}?api_key=${API_KEY}`);

  // console.log(response);
  return response;
};

export default MovieApi;
