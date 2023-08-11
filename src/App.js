import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DashboardPageContainer from "./components/DashboardPage/DashboardPageContainer";
import AllPages from "./components/AllPages/AllPages";
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import { initialize } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";
import LogoutPageContainer from "./components/LogoutPage/LogoutPageContainer";
import RegisterPageContainer from "./components/RegisterPage/RegisterPageContainer";
import { getAuthUserData } from "./redux/auth-reducer";
import PrivateRouteContainer from "./utils/router/PrivateRouteContainer";

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
