import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData } from "../../redux/header-reducer";
import {
  ProfileData,
  Statistics,
  NewActions,
} from "../../redux/header-reducer";
import { State } from "../../redux/redux-store";

interface Props {
  profileData: ProfileData;
  statistics: Statistics;
  newActions: NewActions;
  isAuth: boolean;
  getAuthUserData: (id: number) => void;
}

class HeaderContainer extends React.Component<Props> {
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
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  profileData: state.header.profileData,
  statistics: state.header.statistics,
  newActions: state.header.newActions,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  getAuthUserData: (id: number) => dispatch(getAuthUserData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
