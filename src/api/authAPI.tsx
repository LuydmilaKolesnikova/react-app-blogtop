import { instance } from "./instanceAPI";

type MeResponse = { data?: { id: number; email: string; login: string } };

export const authAPI = {
  me(): Promise<MeResponse> {
    return instance.get(`auth`).then();
  },

  login(email: string, password: string): unknown {
    return instance
      .post(`auth`, {
        id: 1,
        email,
        password,
      })
      .then();
  },

  registering(login: string, email: string, password: string): unknown {
    return instance
      .post(`register`, {
        id: 12,
        login,
        email,
        password,
      })
      .then();
  },

  logout(): unknown {
    return instance
      .post(`auth`, {
        id: null,
        email: null,
        password: null,
      })
      .then();
  },
};
