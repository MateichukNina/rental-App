import axios from 'axios';

const BASE_URL = 'https://6571028b09586eff66422b69.mockapi.io';

export const fetchCar = async () => {
  const response = await axios.get(`${BASE_URL}/catalog`);

  return response.data;
};