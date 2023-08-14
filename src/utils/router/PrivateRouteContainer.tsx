import React from "react";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

class PrivateRouteContainer extends React.Component<any> {
  render() {
    return <PrivateRoute {...this.props} isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {})(PrivateRouteContainer);
