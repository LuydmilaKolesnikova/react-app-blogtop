import { instance } from "./instanceAPI";

export const authAPI = {
  me(): any {
    return instance.get(`auth`).then((response) => response);
  },

  login(email: string, password: string): any {
    return instance
      .post(`auth`, {
        id: 1,
        email: email,
        password: password,
      })
      .then((response) => response);
  },

  registering(login: string, email: string, password: string): any {
    return instance
      .post(`register`, {
        id: 12,
        login: login,
        email: email,
        password: password,
      })
      .then((response) => response);
  },

  logout(): any {
    return instance
      .post(`auth`, {
        id: null,
        email: null,
        password: null,
      })
      .then((response) => response);
  },
};
