import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import headerReducer from "./header-reducer";
import dashboardReducer from "./dashboard-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { AuthInitialState } from "./auth-reducer";
import { DashboardInitialState } from "./dashboard-reducer";
import { HeaderInitialState } from "./header-reducer";
import { FooterInitialState } from "./footer-reducer";

let reducers = combineReducers({
  header: headerReducer,
  dashboard: dashboardReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

(window as any).store = store;

export interface State {
  auth: AuthInitialState;
  header: HeaderInitialState;
  dashboard: DashboardInitialState;
  footer: FooterInitialState;
}

export default store;
