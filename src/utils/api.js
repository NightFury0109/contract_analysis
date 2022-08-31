import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35.85.50.164:3000/api',
  headers: {
    'Content-Type': 'application/json',
    "x-api-key": "Bn6iKLtBgOETjth1g0aXepP4"
  }
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      console.log(err);
    }
    return Promise.reject(err);
  }
);

export default api;
