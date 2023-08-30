import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { State } from "./redux/redux-store";
import { getAuthUserData } from "./redux/auth-reducer";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

interface DispatchProps {
  getAuthUserData: () => void;
}

interface Props extends DispatchProps {
  getAuthUserData: () => void;
}

class AppContainer extends React.Component<Props> {
  componentWillMount() {
    this.props.getAuthUserData();
  }
  render() {
    return (
      <App {...this.props} getAuthUserData={this.props.getAuthUserData}></App>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, DispatchProps, AnyAction>
) => ({
  getAuthUserData: () => dispatch(getAuthUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
