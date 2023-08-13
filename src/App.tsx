import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.tsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.tsx";
import DashboardPageContainer from "./components/DashboardPage/DashboardPageContainer.tsx";
import AllPages from "./components/AllPages/AllPages.tsx";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { initialize } from "./redux/app-reducer.tsx";
import Preloader from "./components/common/Preloader/Preloader.tsx";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer.tsx";
import LogoutPageContainer from "./components/LogoutPage/LogoutPageContainer.tsx";
import RegisterPageContainer from "./components/RegisterPage/RegisterPageContainer.tsx";
import { getAuthUserData } from "./redux/auth-reducer.tsx";
import PrivateRouteContainer from "./utils/router/PrivateRouteContainer.tsx";

class App extends React.Component {
  componentWillMount() {
    this.props.getAuthUserData();
  }
  render() {
    return (
      <BrowserRouter>
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
            <Route
              path="/register/*"
              element={<RegisterPageContainer />}
            ></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { getAuthUserData })(App);
