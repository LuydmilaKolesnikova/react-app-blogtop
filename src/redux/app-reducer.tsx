import { getAuthUserData } from "./auth-reducer.tsx";

const INITIALIZED_SUCCESSED = "INITIALIZED_SUCCESSED";

export const initializedSuccessed = () => {
  return {
    type: INITIALIZED_SUCCESSED,
  };
};

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

/* export const initialize = () => (dispatch) => {
  
    let promise = getAuthUserData();
    Promise.all([promise]).then(() => {
    dispatch(initializedSuccessed());
    });
}; */

export const initialize = () => (dispatch) => {
  let promise = getAuthUserData();
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccessed());
  });
};

export default appReducer;
