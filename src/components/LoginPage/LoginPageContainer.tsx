import React from "react";
import { connect } from "react-redux";
import LoginPage from "./LoginPage.tsx";
import { login } from "../../redux/auth-reducer.tsx";

class LoginPageContainer extends React.Component {
  render() {
    return (
      <LoginPage
        {...this.props}
        login={this.props.login}
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
