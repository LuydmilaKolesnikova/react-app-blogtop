import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import headerReducer from "./header-reducer";
import dashboardReducer from "./dashboard-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
/* import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import { reducer as formReducer } from "redux-form"; */
import thunk from "redux-thunk";

let reducers = combineReducers({
  header: headerReducer,
  dashboard: dashboardReducer,
  auth: authReducer,
  app: appReducer,
  /* profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  authPage: authReducer,
  app: appReducer,
  form: formReducer, */
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
