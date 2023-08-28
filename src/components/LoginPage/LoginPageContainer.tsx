import React from "react";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import { login } from "../../redux/auth-reducer";
import { State } from "../../redux/redux-store";

interface Props {
  isAuth: boolean | null;
  login: (email: string, password: string) => void;
}

class LoginPageContainer extends React.Component<Props> {
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

const mapStateToProps = (state: State) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch: any) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
