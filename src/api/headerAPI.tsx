import { instance } from "./instanceAPI";
import { HeaderInitialState } from "../redux/header-reducer";

interface headerResponse {
  data: HeaderInitialState;
}

export const headerAPI = {
  getAuthUserData(id: number): Promise<headerResponse> {
    return instance.get(`users/${id}`);
  },
};
