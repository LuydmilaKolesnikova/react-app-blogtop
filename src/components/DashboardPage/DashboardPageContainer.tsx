import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import DashboardPage from "./DashboardPage";
import { getAuthUserDashboard } from "../../redux/dashboard-reducer";
import { State } from "../../redux/redux-store";
import { DashboardInitialState } from "../../redux/dashboard-reducer";

interface DispatchProps {
  getAuthUserDashboard: (id: number) => Promise<void>;
}

export interface Props extends DispatchProps {
  dashboard: DashboardInitialState;
}

class DashboardPageContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getAuthUserDashboard(1);
  }

  render() {
    return <DashboardPage {...this.props} dashboard={this.props.dashboard} />;
  }
}

const mapStateToProps = (state: State) => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, DispatchProps, AnyAction>
) => ({
  getAuthUserDashboard: (id: number) => dispatch(getAuthUserDashboard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPageContainer);
