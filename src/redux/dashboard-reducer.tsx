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

export interface PostViewsState {
  number?: number;
  procent?: number;
}

export interface UpvotesState {
  number?: number;
  procent?: number;
}

export interface CommentsState {
  number?: number;
  procent?: number;
}

export interface ProfileViewsState {
  number?: number;
  procent?: number;
}

export interface PieChartState {
  allVisitors?: number;
  os?: { osName: string; count: number }[];
}

export interface GraphChartViewState {
  month: string;
  count: number;
}

export interface GraphChartState {
  views: Array<GraphChartViewState>; //{ month: string; count: number }[];
}

export interface UserSignupState {
  users?: {
    name: string;
    email: string;
    time: string;
    role: string;
  }[];
}

export interface PostProgressState {
  users?: {
    name: string;
    email: string;
    time: string;
    role: string;
  }[];
}

export interface LineGrapState {
  points?: { newUsers: number; year: number }[];
}

export interface DashboardInitialState {
  //dashboard: {
  postViews?: PostViewsState; //{ number: number; procent: number };
  upvotes?: UpvotesState; //{ number: number; procent: number };
  comments?: CommentsState; //{ number: number; procent: number };
  profileViews?: ProfileViewsState; //{ number: number; procent: number };
  pieChart?: PieChartState /* {
      allVisitors: number;
      os: { osName: string; count: number }[];
    }; */;
  graphChart?: GraphChartState /* {
      views: { month: string; count: number }[];
    }; */;
  userSignup?: UserSignupState /* {
      users: {
        name: string;
        email: string;
        time: string;
        role: string;
      }[];
    }; */;
  postProgress?: PostProgressState /* {
      posts: {
        category: string;
        procent: string;
        classname: string;
      }[];
    }; */;
  lineGraph?: LineGrapState /* {
      points: { newUsers: number; year: number }[];
    }; */;
  //};
}

let initialState: DashboardInitialState = {
  postViews: { number: 20, procent: 30 },
  upvotes: {},
  comments: { number: 20, procent: 30 },
  profileViews: {},
  pieChart: {},
  graphChart: { views: [{ month: "January", count: 30 }] },
  userSignup: {},
  postProgress: {},
  lineGraph: {},
};

const dashboardReducer = (
  state: DashboardInitialState = initialState,
  action: SetAuthUserDashboardAction
): DashboardInitialState => {
  switch (action.type) {
    case SET_AUTH_USER_DASHBOARD: {
      return {
        ...state,
        //dashboard: { ...action.dashboardData.dashboard },
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
      dispatch(setAuthUserDashboard(response.data.dashboard));
    } catch (e) {}
  };
}

export default dashboardReducer;
