import React from "react";
import { connect } from "react-redux";
import RegisterPage from "./RegisterPage";
import { registering } from "../../redux/auth-reducer";

class RegisterPageContainer extends React.Component {
  render() {
    return (
      <RegisterPage
        {...this.props}
        register={this.props.register}
        isRegistrationSuccess={this.props.isRegistrationSuccess}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isRegistrationSuccess: state.auth.isRegistrationSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  registering: (login, email, password) =>
    dispatch(registering(login, email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPageContainer);
