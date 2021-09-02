import axios from 'axios';

const fetchImage = ({ searchQuery, apiKay, currentPage, pageSize }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${apiKay}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};

export default fetchImage;
