import { message } from 'antd';
import axios from 'axios';

export const baseURL = import.meta.env.VITE_SERVICES_URL || 'http://localhost:5000';

const request = axios.create({
  baseURL
});

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    message.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export default request;
