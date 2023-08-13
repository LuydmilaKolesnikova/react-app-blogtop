import { dashboardAPI } from "../api/dashboardAPI.tsx";

const SET_AUTH_USER_DASHBOARD = "SET_AUTH_USER_DASHBOARD";

export const setAuthUserDashboard = (data) => {
  return {
    type: SET_AUTH_USER_DASHBOARD,
    dashboard: data.dashboard,
  };
};

let initialState = {
  dashboard: {
    postViews: { number: 504, procent: 14 },
    upvotes: { number: 252, procent: 52 },
    comments: { number: 1452, procent: 66 },
    profileViews: { number: 1003, procent: 103 },
    pieChart: {
      allVisitors: 20,
      os: [
        { osName: "Makintosh", count: 5 },
        { osName: "Windows", count: 2 },
        { osName: "Android", count: 10 },
        { osName: "iOS", count: 3 },
      ],
    },
    graphChart: {
      views: [
        { month: "Jan", count: 5 },
        { month: "Feb", count: 7 },
        { month: "Mar", count: 14 },
        { month: "Apr", count: 20 },
        { month: "May", count: 35 },
        { month: "Jun", count: 38 },
        { month: "Jul", count: 36 },
        { month: "Aug", count: 41 },
        { month: "Sep", count: 34 },
        { month: "Oct", count: 36 },
        { month: "Nov", count: 45 },
        { month: "Dec", count: 47 },
      ],
      axis: [50, 40, 30, 20, 10, 0],
    },
    userSignup: {
      users: [
        {
          name: "Isaiah Brewer",
          email: "noah_kessler@rogahn.biz",
          time: "4 min ago",
          role: "Contributor",
          classname: "roleContributor",
        },
        {
          name: "Tyler Tucker",
          email: "zemlak.tate@lakin.us",
          time: "20 min ago",
          role: "Subscriber",
          classname: "roleSubscriber",
        },
        {
          name: "Chad Peterson",
          email: "royal_turcotte@bernier.biz",
          time: "1h ago",
          role: "Moderator",
          classname: "roleModerator",
        },
        {
          name: "Mathilda Sutton",
          email: "kirlin.agustin@gmail.com",
          time: "2h ago",
          role: "Admin",
          classname: "roleAdmin",
        },
        {
          name: "Lucas Hampton",
          email: "labadie_maryse@dawn.org",
          time: "3h ago",
          role: "Moderator",
          classname: "roleModerator",
        },
        {
          name: "Harold Robbins",
          email: "harold_robbins@dawn.org",
          time: "4h ago",
          role: "Subscriber",
          classname: "roleSubscriber",
        },
      ],
    },
    postProgress: {
      posts: [
        {
          category: "Video Posts",
          procent: "40%",
          classname: "VideoPosts",
        },
        {
          category: "Open Lists",
          procent: "90%",
          classname: "OpenLists",
        },
        {
          category: "Normal Blog Posts",
          procent: "70%",
          classname: "NormalBlogPosts",
        },
        {
          category: "Audio Posts",
          procent: "20%",
          classname: "AudioPosts",
        },
        {
          category: "Images & Videos",
          procent: "1%",
          classname: "ImagesVideos",
        },
      ],
    },
    lineGraph: {
      points: [
        { newUsers: 10, year: 2013 },
        { newUsers: 13, year: 2014 },
        { newUsers: 22, year: 2015 },
        { newUsers: 29, year: 2016 },
        { newUsers: 28, year: 2017 },
        { newUsers: 27, year: 2018 },
        { newUsers: 35, year: 2019 },
        { newUsers: 48, year: 2020 },
        { newUsers: 51, year: 2021 },
        { newUsers: 50, year: 2022 },
        { newUsers: 65, year: 2023 },
      ],
    },
  },
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DASHBOARD: {
      return {
        ...state,
        dashboard: { ...action.dashboard },
      };
    }
    default:
      return state;
  }
};

export const getAuthUserDashboard = (id) => {
  return async (dispatch) => {
    try {
      const response = await dashboardAPI.getAuthUserDashboard(id);
      dispatch(setAuthUserDashboard(response.data));
    } catch (e) {}
  };
};

export default dashboardReducer;
