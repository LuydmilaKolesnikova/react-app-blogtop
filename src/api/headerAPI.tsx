import { instance } from "./instanceAPI";

export const headerAPI = {
  getAuthUserData(id) {
    return instance.get(`users/${id}`).then((response) => response);
  },
};
