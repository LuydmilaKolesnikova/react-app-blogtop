import React from "react";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import { State } from "../../redux/redux-store";

interface Props {
  isAuth: boolean | null;
}

class PrivateRouteContainer extends React.Component<Props> {
  render() {
    return <PrivateRoute {...this.props} isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state: State) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {})(PrivateRouteContainer);
