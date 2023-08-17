import { authAPI } from "../api/authAPI";

const SET_USER_DATA = "SET_USER_DATA";
const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

type payloadType = {
  id: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;
};

type SetUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: payloadType;
};

export const setAuthUserData = (
  id: null | number,
  email: null | string,
  login: null | string,
  isAuth: boolean
): SetUserDataActionType => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};

type registrationSuccessActionType = {
  type: typeof REGISTRATION_SUCCESS;
  success: boolean;
};

export const registrationSuccess = (
  success: boolean
): registrationSuccessActionType => {
  return {
    type: REGISTRATION_SUCCESS,
    success,
  };
};

let state = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: null as boolean | null,
  isRegistrationSuccess: null as boolean | null,
};

type InitialStateType = typeof state;

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isRegistrationSuccess: false,
};

const authReducer = (
  state: InitialStateType = initialState,
  action: SetUserDataActionType | registrationSuccessActionType
): InitialStateType => {
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
  return async (dispatch: any) => {
    try {
      const response = await authAPI.me();
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login, id ? true : false));
    } catch (e) {
      alert("No response from server");
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      await authAPI.login(email, password);
      dispatch(getAuthUserData());
    } catch (e) {
      alert("No response from server");
    }
  };
};

export const registering = (login: string, email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      await authAPI.registering(login, email, password);
      dispatch(registrationSuccess(true));
    } catch (e) {
      alert("No response from server");
    }
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    try {
      await authAPI.logout();
      dispatch(setAuthUserData(null, null, null, false));
    } catch (e) {
      alert("No response from server");
    }
  };
};

export default authReducer;
