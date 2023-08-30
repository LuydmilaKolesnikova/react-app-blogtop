import React from "react";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import LogoutPage from "./LogoutPage";
import { logout } from "../../redux/auth-reducer";
import { State } from "../../redux/redux-store";

interface DispatchProps {
  logout: () => void;
}

interface Props extends DispatchProps {
  isAuth: boolean;
}

class LogoutPageContainer extends React.Component<Props> {
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

const mapStateToProps = (state: State) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, DispatchProps, AnyAction>
) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutPageContainer);
