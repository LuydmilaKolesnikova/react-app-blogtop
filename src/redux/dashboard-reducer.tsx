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

export interface PieChartOsState {
  osName: string;
  count: number;
}

export interface PieChartState {
  allVisitors: number;
  os: Array<PieChartOsState>;
}

export interface GraphChartViewState {
  month: string;
  count: number;
}

export interface GraphChartState {
  views: Array<GraphChartViewState>;
}

export interface UserSignupUserState {
  name: string;
  email: string;
  time: string;
  role: string;
}

export interface UserSignupState {
  users: Array<UserSignupUserState>;
}

export interface PostProgressState {
  posts: {
    category: string;
    procent: string;
    classname: string;
  }[];
}

export interface LineGraphState {
  points: { newUsers: number; year: number }[];
}

export interface DashboardInitialState {
  postViews: PostViewsState;
  upvotes: UpvotesState;
  comments: CommentsState;
  profileViews: ProfileViewsState;
  pieChart: PieChartState;
  graphChart: GraphChartState;
  userSignup: UserSignupState;
  postProgress: PostProgressState;
  lineGraph: LineGraphState;
}

let initialState: DashboardInitialState = {
  postViews: { number: 20, procent: 30 },
  upvotes: {},
  comments: { number: 20, procent: 30 },
  profileViews: {},
  pieChart: { allVisitors: 20, os: [{ osName: "ioS", count: 5 }] },
  graphChart: { views: [{ month: "January", count: 30 }] },
  userSignup: {
    users: [
      {
        name: "ggggg",
        email: "hhhhhhhhhhh",
        time: "yyyyyyyyyyyy",
        role: "ffffffffff",
      },
    ],
  },
  postProgress: {
    posts: [
      {
        category: "ggggg",
        procent: "20%",
        classname: "rrrrr",
      },
    ],
  },
  lineGraph: { points: [{ newUsers: 25, year: 2020 }] },
};

const dashboardReducer = (
  state: DashboardInitialState = initialState,
  action: SetAuthUserDashboardAction
): DashboardInitialState => {
  switch (action.type) {
    case SET_AUTH_USER_DASHBOARD: {
      return {
        ...state,
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
