import axios from 'axios';

export const BASE_URL = 'https://635570ff483f5d2df3b48ab4.mockapi.io/api/v1/';

const httpService = axios.create({
  baseURL: `${BASE_URL}`,
});

export default httpService;
