import React from "react";
import { connect } from "react-redux";
import DashboardPage from "./DashboardPage";
import { getAuthUserDashboard } from "../../redux/dashboard-reducer";
import { State } from "../../redux/redux-store";

class DashboardPageContainer extends React.Component<any> {
  componentDidMount() {
    this.props.getAuthUserDashboard(1);
  }

  render() {
    return <DashboardPage {...this.props} dashboard={this.props.dashboard} />;
  }
}

const mapStateToProps = (state: State) => ({
  dashboard: state.dashboard.dashboard,
});

const mapDispatchToProps = (dispatch) => ({
  getAuthUserDashboard: (id: number) => dispatch(getAuthUserDashboard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPageContainer);
