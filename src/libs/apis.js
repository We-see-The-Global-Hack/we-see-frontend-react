import { http } from "./http";

const apiRequest = (method, url) => (args) =>
  http({ method, url: typeof url === "function" ? url(args) : url, ...args });

const Api = {
  todos: apiRequest("get", "todos/1"),
  listings: {
    get: apiRequest("get", "listings"),
  },
  auth: {
    signIn: apiRequest("post", "auth/login"),
    signUp: apiRequest("post", "auth/signup"),
    checkUser: apiRequest("get", "auth/check"),
  },
  user: {
    get: apiRequest("get", (params) => `users/${params.id}`),
    update: apiRequest("patch", (params) => `users/${params.id}`),
  },
};

export default Api;
