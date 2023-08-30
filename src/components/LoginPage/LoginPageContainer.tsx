import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import LoginPage from "./LoginPage";
import { login } from "../../redux/auth-reducer";
import { State } from "../../redux/redux-store";

interface DispatchProps {
  login: (email: string, password: string) => void;
}

interface Props extends DispatchProps {
  isAuth: boolean;
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

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, DispatchProps, AnyAction>
) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
