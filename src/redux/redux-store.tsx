import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import headerReducer from "./header-reducer";
import dashboardReducer from "./dashboard-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  header: headerReducer,
  dashboard: dashboardReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

(window as any).store = store;

export default store;
