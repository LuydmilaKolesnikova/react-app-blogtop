import { authAPI } from "../api/authAPI";

const SET_USER_DATA = "SET_USER_DATA";
const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

interface PayloadData {
  id?: number;
  email?: string;
  login?: string;
}

interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: PayloadData;
}

export function setAuthUserData(
  id?: number,
  email?: string,
  login?: string
): SetUserDataAction {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login },
  };
}

type RegistrationSuccessAction = {
  type: typeof REGISTRATION_SUCCESS;
  success: boolean;
};

export function registrationSuccess(
  success: boolean
): RegistrationSuccessAction {
  return {
    type: REGISTRATION_SUCCESS,
    success,
  };
}

export interface AuthInitialState extends PayloadData {
  isAuth?: boolean;
  isRegistrationSuccess?: boolean;
}

let initialState: AuthInitialState = {
  isAuth: false,
  isRegistrationSuccess: false,
};

const authReducer = (
  state: AuthInitialState = initialState,
  action: SetUserDataAction | RegistrationSuccessAction
): AuthInitialState => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        isAuth: action.payload.id ? true : false,
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

export function getAuthUserData() {
  return async (dispatch) => {
    try {
      const response = await authAPI.me();
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login));
    } catch (e) {
      alert("No response from server");
    }
  };
}

export function login(email: string, password: string) {
  return async (dispatch) => {
    try {
      await authAPI.login(email, password);
      dispatch(getAuthUserData());
    } catch (e) {
      alert("No response from server");
    }
  };
}

export function registering(login: string, email: string, password: string) {
  return async (dispatch) => {
    try {
      await authAPI.registering(login, email, password);
      dispatch(registrationSuccess(true));
    } catch (e) {
      alert("No response from server");
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await authAPI.logout();
      dispatch(setAuthUserData(null, null, null));
    } catch (e) {
      alert("No response from server");
    }
  };
}

export default authReducer;
