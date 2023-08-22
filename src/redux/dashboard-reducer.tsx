import { dashboardAPI } from "../api/dashboardAPI";

const SET_AUTH_USER_DASHBOARD = "SET_AUTH_USER_DASHBOARD";

interface SetAuthUserDashboardAction {
  type: typeof SET_AUTH_USER_DASHBOARD;
  dashboardData: DashboardInitialState;
}

export function setAuthUserDashboard(
  dashboardData: DashboardInitialState
): SetAuthUserDashboardAction {
  return {
    type: SET_AUTH_USER_DASHBOARD,
    dashboardData,
  };
}

export interface DashboardInitialState {
  dashboard: {
    postViews?: { number: number; procent: number };
    upvotes?: { number: number; procent: number };
    comments?: { number: number; procent: number };
    profileViews?: { number: number; procent: number };
    pieChart?: {
      allVisitors: number;
      os: { osName: string; count: number }[];
    };
    graphChart?: {
      views: { month: string; count: number }[];
    };
    userSignup?: {
      users: {
        name: string;
        email: string;
        time: string;
        role: string;
      }[];
    };
    postProgress?: {
      posts: {
        category: string;
        procent: string;
        classname: string;
      }[];
    };
    lineGraph?: {
      points: { newUsers: number; year: number }[];
    };
  };
}

let initialState: DashboardInitialState = {
  dashboard: {},
};

const dashboardReducer = (
  state: DashboardInitialState = initialState,
  action: SetAuthUserDashboardAction
): DashboardInitialState => {
  switch (action.type) {
    case SET_AUTH_USER_DASHBOARD: {
      return {
        ...state,
        dashboard: { ...action.dashboardData.dashboard },
      };
    }
    default:
      return state;
  }
};

type GetAuthUserDashboardhCallback = (
  param: SetAuthUserDashboardAction
) => DashboardInitialState;

export function getAuthUserDashboard(id: number) {
  return async (dispatch: GetAuthUserDashboardhCallback) => {
    try {
      const response = await dashboardAPI.getAuthUserDashboard(id);
      dispatch(setAuthUserDashboard(response.data));
    } catch (e) {}
  };
}

export default dashboardReducer;
