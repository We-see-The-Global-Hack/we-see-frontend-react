import axios from 'axios';
import Qs from 'qs';
import store from 'domain/store';
import { envTokenSelector } from 'domain/env/selectors';

const apiPath = 'https://c8e66ad7.ngrok.io/api';

export const http = axios.create({
  baseURL: apiPath,
});

http.defaults.paramsSerializer = params => Qs.stringify(params, { arrayFormat: 'brackets' });

http.interceptors.request.use(config => {
  const state = store.getState();
  const token = envTokenSelector(state);
  
  if (token) {
    config.headers = Object.assign(config.headers, { 'Authorization': `Bearer ${token}` });
  }
  
  return config;
});
