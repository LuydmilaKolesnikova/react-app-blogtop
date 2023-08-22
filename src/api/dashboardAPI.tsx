import { instance } from "./instanceAPI";

import { DashboardInitialState } from "../redux/dashboard-reducer";

interface dashboardResponse {
  data: { dashboard: DashboardInitialState };
}

export const dashboardAPI = {
  getAuthUserDashboard(id: number): Promise<dashboardResponse> {
    return instance.get(`users/${id}`);
  },
};
