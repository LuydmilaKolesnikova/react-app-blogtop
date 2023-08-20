import { instance } from "./instanceAPI";

type headerResponse = { data: {profileData:{}, statistics:{}, newActions: {} } };

export const headerAPI = {
  getAuthUserData(id:number) : Promise<headerResponse> {
    return instance.get(`users/${id}`);
  },
};
