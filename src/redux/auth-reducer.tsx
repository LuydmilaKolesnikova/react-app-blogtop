import { authAPI } from "../api/authAPI";

const SET_USER_DATA = "SET_USER_DATA";
const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

interface PayloadData {
  id?: number | null;
  email?: string | null;
  login?: string | null;
}

interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: PayloadData;
}

export function setAuthUserData(
  id: number | null,
  email: string | null,
  login: string | null
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
  isAuth: boolean;
  isRegistrationSuccess: boolean;
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

type SetAuthUserDataDispatchCallback = (
  param: SetUserDataAction
) => AuthInitialState;

export function getAuthUserData() {
  return async (dispatch: SetAuthUserDataDispatchCallback) => {
    try {
      const response = await authAPI.me();
      if (response.data) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login));
      }
    } catch (e) {}
  };
}

type LoginDispatchCallback = (
  param: (dispatch: SetAuthUserDataDispatchCallback) => Promise<void>
) => AuthInitialState;

export function login(email: string, password: string) {
  return async (dispatch: LoginDispatchCallback) => {
    try {
      await authAPI.login(email, password);
      dispatch(getAuthUserData());
    } catch (e) {
      alert("No response from server");
    }
  };
}

type RegisteringDispatchCallback = (
  param: RegistrationSuccessAction
) => boolean;

export function registering(login: string, email: string, password: string) {
  return async (dispatch: RegisteringDispatchCallback) => {
    try {
      await authAPI.registering(login, email, password);
      dispatch(registrationSuccess(true));
    } catch (e) {
      alert("No response from server");
    }
  };
}

type LogoutDispatchCallback = (param: SetUserDataAction) => void;

export function logout() {
  return async (dispatch: LogoutDispatchCallback) => {
    try {
      await authAPI.logout();
      dispatch(setAuthUserData(null, null, null));
    } catch (e) {
      alert("No response from server");
    }
  };
}

export default authReducer;
