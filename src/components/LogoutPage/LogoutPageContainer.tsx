import React from "react";
import { connect } from "react-redux";
import LogoutPage from "./LogoutPage";
import { logout } from "../../redux/auth-reducer";

class LogoutPageContainer extends React.Component<any> {
  render() {
    return (
      <LogoutPage
        {...this.props}
        logout={this.props.logout}
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutPageContainer);
