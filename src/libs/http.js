import axios from 'axios';
import Qs from 'qs';
import store from 'domain/store';
import { envTokensSelector } from 'domain/env/selectors';

const apiPath = 'https://jsonplaceholder.typicode.com';

export const http = axios.create({
  baseURL: apiPath,
});

http.defaults.paramsSerializer = params => Qs.stringify(params, { arrayFormat: 'brackets' });

http.interceptors.request.use(config => {
  const state = store.getState();
  const tokens = envTokensSelector(state);
  
  if (tokens) {
    config.headers = Object.assign(config.headers, tokens);
  }
  
  return config;
});
