import React from "react";
import { connect } from "react-redux";
import RegisterPage from "./RegisterPage";
import { registering } from "../../redux/auth-reducer";
import { State } from "../../redux/redux-store";

interface Props {
  isRegistrationSuccess: boolean;
  registering: (login: string, email: string, password: string) => void;
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

const mapDispatchToProps = (dispatch) => ({
  registering: (login: string, email: string, password: string) =>
    dispatch(registering(login, email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPageContainer);
