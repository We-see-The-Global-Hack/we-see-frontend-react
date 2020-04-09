import { http } from './http';

const apiRequest = (method, url) => args =>
  http({ method, url: typeof url === 'function' ? url(args) : url, ...args, });

const Api = {
  todos: apiRequest('get', 'todos/1'),
  auth: {
    signIn: apiRequest('get', 'todos/1'),
  }
};

export default Api;
