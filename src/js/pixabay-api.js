import axios from 'axios';

const API_KEY = '56165322-4eccb7c267e8fea85df72b379';

export const getImagesByQuery = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
  return response.data;
};
