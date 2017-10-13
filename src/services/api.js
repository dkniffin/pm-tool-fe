import axios from 'axios';

function init() {
  const api = axios.create({ baseURL: '/api' });

  // Transforms and interceptors can go here
  api.interceptors.request.use();
  api.interceptors.response.use();

  return api;
}

export {
  init
};

export default init();
