import axios from 'axios';
const pageSize = 12;
const apiKay = '19388230-75c4bcf9e22da5087bb0ddd0d';

const fetchImage = ({ query, currentPage }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${apiKay}&q=${query}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};
const Api = { fetchImage };

export default Api;
