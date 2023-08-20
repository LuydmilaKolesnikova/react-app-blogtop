import { instance } from "./instanceAPI";

type dashboardResponse = { data: {dashboard:{} } };


export const dashboardAPI = {

  getAuthUserDashboard(id:number) : Promise<dashboardResponse> {
    return instance.get(`users/${id}`);
  },
};
