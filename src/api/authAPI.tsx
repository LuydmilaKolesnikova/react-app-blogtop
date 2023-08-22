import { instance } from "./instanceAPI";

interface MeResponse {
  data: { id: number; email: string; login: string };
}

export const authAPI = {
  me(): Promise<MeResponse> {
    return instance.get(`auth`);
  },

  login(email: string, password: string): unknown {
    return instance.post(`auth`, {
      id: 1,
      email,
      password,
    });
  },

  registering(login: string, email: string, password: string): unknown {
    return instance.post(`register`, {
      id: 12,
      login,
      email,
      password,
    });
  },

  logout(): unknown {
    return instance.post(`auth`, {
      id: null,
      email: null,
      password: null,
    });
  },
};
