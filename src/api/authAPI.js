import { instance } from "./instanceAPI";

export const authAPI = {
  me() {
    //debugger;
    return instance.get(`auth`).then((response) => response);
  },

  login(email, password) {
    return instance
      .post(`auth`, {
        id: 1,
        email: email,
        password: password,
      })
      .then((response) => response);
  },

  registering(login, email, password) {
    return instance
      .post(`register`, {
        id: 12,
        login: login,
        email: email,
        password: password,
      })
      .then((response) => response);
  },

  logout() {
    return instance
      .post(`auth`, {
        id: null,
        email: null,
        password: null,
      })
      .then((response) => response);
  },
};
