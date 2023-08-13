import { authAPI } from "../api/authAPI.tsx";

const SET_USER_DATA = "SET_USER_DATA";
const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

export const setAuthUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};

export const registrationSuccess = (success) => {
  return {
    type: REGISTRATION_SUCCESS,
    success,
  };
};

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isRegistrationSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        isRegistrationSuccess: action.success,
      };
    }
    default:
      return state;
  }
};

export const getAuthUserData = () => {
  return async (dispatch) => {
    try {
      const response = await authAPI.me();
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login, id ? true : false));
    } catch (e) {}
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await authAPI.login(email, password);
      dispatch(getAuthUserData());
    } catch (e) {}
    //if (response.data.isLogin) {

    //} /* else {
    //dispatch(stopSubmit("login", { _error: response.messages }));
    //} */
  };
};

export const registering = (login, email, password) => {
  return async (dispatch) => {
    try {
      const response = await authAPI.registering(login, email, password);
      dispatch(registrationSuccess(true));
    } catch (e) {}
    //if (response.data.isLogin) {

    //} /* else {
    //dispatch(stopSubmit("login", { _error: response.messages }));
    //} */
  };
};

export const logout = () => {
  return async (dispatch) => {
    const response = await authAPI.logout();
    //if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    //}
  };
};

export default authReducer;
