import React, { useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DashboardPageContainer from "./components/DashboardPage/DashboardPageContainer";
import AllPages from "./components/AllPages/AllPages";
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";
import LogoutPageContainer from "./components/LogoutPage/LogoutPageContainer";
import RegisterPageContainer from "./components/RegisterPage/RegisterPageContainer";
import PrivateRouteContainer from "./utils/router/PrivateRouteContainer";
import { initialState } from "./redux/footer-reducer";

interface Props {
  getAuthUserData: () => void;
}

const App: React.FC<Props> = (props) => {
  useEffect(() => {
    props.getAuthUserData();
  });

  return (
    <HashRouter basename="/">
      <div className="app-wrapper">
        <HeaderContainer />
        <Routes>
          <Route element={<PrivateRouteContainer />}>
            <Route path="/profile/*" element={<ProfilePage />}></Route>
            <Route
              path="/dashboard/*"
              element={<DashboardPageContainer />}
            ></Route>
          </Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/all-pages/*" element={<AllPages />}></Route>
          <Route path="/login/*" element={<LoginPageContainer />}></Route>
          <Route path="/logout/*" element={<LogoutPageContainer />}></Route>
          <Route path="/register/*" element={<RegisterPageContainer />}></Route>
        </Routes>
        <Footer postsData={initialState} />
      </div>
    </HashRouter>
  );
};

export default App;
