import { instance } from "./instanceAPI.tsx";

export const dashboardAPI = {
  getAuthUserDashboard(id) {
    return instance.get(`users/${id}`).then((response) => response);
  },
};
