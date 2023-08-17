import { authAPI } from "../api/authAPI";

const SET_USER_DATA = "SET_USER_DATA";
const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

interface PayloadData {
  id?: number;
  email?: string;
  login?: string;
  isAuth: boolean;
}

interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: PayloadData;
}

export function setAuthUserData(
  isAuth: boolean,
  id?: number,
  email?: string,
  login?: string
): SetUserDataAction {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
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

interface InitialState extends PayloadData {
  isRegistrationSuccess?: boolean;
}

let initialState: InitialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isRegistrationSuccess: false,
};

const authReducer = (
  state: InitialState = initialState,
  action: SetUserDataAction | RegistrationSuccessAction
): InitialState => {
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
      dispatch(setAuthUserData(id ? true : false, id, email, login));
    } catch (e) {
      alert("No response from server");
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch) => {
    try {
      await authAPI.login(email, password);
      dispatch(getAuthUserData());
    } catch (e) {
      alert("No response from server");
    }
  };
};

export const registering = (login: string, email: string, password: string) => {
  return async (dispatch) => {
    try {
      await authAPI.registering(login, email, password);
      dispatch(registrationSuccess(true));
    } catch (e) {
      alert("No response from server");
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await authAPI.logout();
      dispatch(setAuthUserData(false, null, null, null));
    } catch (e) {
      alert("No response from server");
    }
  };
};

export default authReducer;
