import { instance } from "./instanceAPI.tsx";

export const headerAPI = {
  getAuthUserData(id) {
    return instance.get(`users/${id}`).then((response) => response);
  },
};
