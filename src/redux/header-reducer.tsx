import { headerAPI } from "../api/headerAPI";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export const setAuthUserData = (data) => {
  return {
    type: SET_AUTH_USER_DATA,
    profileData: data.profileData,
    statistics: data.statistics,
    newActions: data.newActions,
  };
};

let initialState = {
  profileData: {
    name: "Luydmila",
    address: "Kolomna, Russia",
    photo: "",
  },
  statistics: [{ posts: 10 }, { followers: 125 }, { following: 54 }],
  newActions: {
    followfeed: null,
    messages: null,
    notifications: null,
  },
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        profileData: action.profileData,
        statistics: action.statistics,
        newActions: action.newActions,
      };
    }
    default:
      return state;
  }
};

export const getAuthUserData = (id) => {
  return async (dispatch) => {
    try {
      const response = await headerAPI.getAuthUserData(id);
      dispatch(setAuthUserData(response.data));
    } catch (e) {}
  };
};

export default headerReducer;
