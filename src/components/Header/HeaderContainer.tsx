import React from "react";
import { connect } from "react-redux";
import Header from "./Header.tsx";
import { getAuthUserData } from "../../redux/header-reducer.tsx";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData(1);
  }

  render() {
    return (
      <Header
        {...this.props}
        profileData={this.props.profileData}
        statistics={this.props.statistics}
        newActions={this.props.newActions}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profileData: state.header.profileData,
  statistics: state.header.statistics,
  newActions: state.header.newActions,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  getAuthUserData: (id) => dispatch(getAuthUserData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
