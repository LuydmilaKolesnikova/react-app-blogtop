import { instance } from "./instanceAPI";

interface dashboardResponse { data: {dashboard:{} } };


export const dashboardAPI = {

  getAuthUserDashboard(id:number) : Promise<dashboardResponse> {
    return instance.get(`users/${id}`);
  },
};
