import { headerAPI } from "../api/headerAPI";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

interface SetAuthUserDataAction {
  type: typeof SET_AUTH_USER_DATA;
  authUserData: InitialState;
}

export function setAuthUserData(
  authUserData: InitialState
): SetAuthUserDataAction {
  return {
    type: SET_AUTH_USER_DATA,
    authUserData,
  };
}

interface ProfileData {
  profileData: {
    name?: string;
    address?: string;
    photo?: string;
  };
}

interface Statistics {
  statistics: {
    posts?: number;
    followers?: number;
    following?: number;
  };
}

interface NewActions {
  newActions: {
    followfeed?: number;
    messages?: number;
    notifications?: number;
  };
}

interface InitialState extends ProfileData, Statistics, NewActions {}

let initialState: InitialState = {
  profileData: {},
  statistics: {},
  newActions: {},
};

const headerReducer = (
  state: InitialState = initialState,
  action: SetAuthUserDataAction
) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        profileData: action.authUserData.profileData,
        statistics: action.authUserData.statistics,
        newActions: action.authUserData.newActions,
      };
    }
    default:
      return state;
  }
};

export const getAuthUserData = (id: number) => {
  return async (dispatch) => {
    try {
      const response = await headerAPI.getAuthUserData(id);
      dispatch(setAuthUserData(response.data));
    } catch (e) {}
  };
};

export default headerReducer;
