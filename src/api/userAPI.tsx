import { instance } from "./instanceAPI";

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};
