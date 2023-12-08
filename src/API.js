import axios from 'axios';

const BASE_URL = 'https://6571028b09586eff66422b69.mockapi.io/adverts';

export const getCar = async (page = 1, limit = 12) => {
  const response = await axios.get(`${BASE_URL}/advert`, {
    params: {
      page,
      limit,
    },
  });

  return response.data;
};