import React from "react";
import { connect } from "react-redux";
import DashboardPage from "./DashboardPage.tsx";
//import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAuthUserDashboard } from "../../redux/dashboard-reducer.tsx";
//import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

class DashboardPageContainer extends React.Component {
  componentDidMount() {
    /* let location = this.props.router.params["*"];
    if (!location) {
      location = this.props.autorizedIserId;
    } */
    this.props.getAuthUserDashboard(1);
    //this.props.getStatus(location);
  }

  render() {
    return <DashboardPage {...this.props} dashboard={this.props.dashboard} />;
  }
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard.dashboard,
});

const mapDispatchToProps = (dispatch) => ({
  getAuthUserDashboard: (id) => dispatch(getAuthUserDashboard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPageContainer);
