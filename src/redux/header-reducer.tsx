import { headerAPI } from "../api/headerAPI";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

interface SetAuthUserDataAction {
  type: typeof SET_AUTH_USER_DATA;
  authUserData: HeaderInitialState;
}

export function setAuthUserData(
  authUserData: HeaderInitialState
): SetAuthUserDataAction {
  return {
    type: SET_AUTH_USER_DATA,
    authUserData,
  };
}

export interface ProfileDataState {
  name: string;
  address: string;
  photo: string;
}

export interface StatisticsState {
  posts: number;
  followers: number;
  following: number;
}

export interface NewActionsState {
  [key: string]: number;
  followfeed: number;
  messages: number;
  notifications: number;
}

export interface HeaderInitialState {
  profileData: ProfileDataState;
  statistics: StatisticsState;
  newActions: NewActionsState;
}

/* let initialState: HeaderInitialState = {
  profileData: {},
  statistics: {},
  newActions: {},
}; */

const headerReducer = (
  state: HeaderInitialState,
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

type DispatchCallback = (param: SetAuthUserDataAction) => HeaderInitialState;

export const getAuthUserData = (id: number) => {
  return async (dispatch: DispatchCallback) => {
    try {
      const response = await headerAPI.getAuthUserData(id);
      dispatch(setAuthUserData(response.data));
    } catch (e) {}
  };
};

export default headerReducer;
