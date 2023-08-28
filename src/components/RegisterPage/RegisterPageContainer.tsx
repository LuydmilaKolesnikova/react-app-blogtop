import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import RegisterPage from "./RegisterPage";
import { registering } from "../../redux/auth-reducer";
import { State } from "../../redux/redux-store";

interface DispatchProps {
  registering: (login: string, email: string, password: string) => void;
}

interface Props extends DispatchProps {
  isRegistrationSuccess: boolean;
}

class RegisterPageContainer extends React.Component<Props> {
  render() {
    return (
      <RegisterPage
        {...this.props}
        registering={this.props.registering}
        isRegistrationSuccess={this.props.isRegistrationSuccess}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  isRegistrationSuccess: state.auth.isRegistrationSuccess,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, DispatchProps, AnyAction>
) => ({
  registering: (login: string, email: string, password: string) =>
    dispatch(registering(login, email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPageContainer);
