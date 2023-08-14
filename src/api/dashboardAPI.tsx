import { instance } from "./instanceAPI";

export const dashboardAPI = {
  getAuthUserDashboard(id) {
    return instance.get(`users/${id}`).then((response) => response);
  },
};
