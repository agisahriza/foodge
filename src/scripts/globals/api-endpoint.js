import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  NEW_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
