import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.jpg";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import MainMenu from "./MainMenu/MainMenu";
import ActionBtnsArea from "./ActionBtnsArea/ActionBtnsArea";
import profileIcon from "../../images/profile-icon.jpg";
import SearchArea from "./SearchArea/SearchArea";
import StatisticsArea from "./StatisticsArea/StatisticsArea";
import LoginLink from "./LoginLink/LoginLink";
import {
  ProfileDataState,
  StatisticsState,
  NewActionsState,
} from "../../redux/header-reducer";

interface Props {
  profileData: ProfileDataState;
  statistics: StatisticsState;
  newActions: NewActionsState;
  isAuth: boolean | null;
}

const Header: React.FC<Props> = (props) => {
  let [btnAddPostHover, setBtnAddPostHover] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topArea}>
        <img className={styles.logo} src={logo} alt=""></img>
        <MainMenu />
        <SearchArea />
        <button
          className={
            btnAddPostHover
              ? `${styles.btnAddPost} ${styles.btnAddPostHover}`
              : styles.btnAddPost
          }
          onMouseOver={() => setBtnAddPostHover(true)}
          onMouseOut={() => setBtnAddPostHover(false)}
        >
          + ADD POST
        </button>
        {props.isAuth && <ActionBtnsArea newActions={props.newActions} />}
        {props.isAuth ? <ProfileMenu /> : <LoginLink />}
      </div>
      {props.isAuth && (
        <>
          <div className={styles.headerBanner}></div>
          <div className={styles.bottomArea}>
            <div className={styles.profileInfo}>
              <img src={profileIcon} alt="" />
              <div className={styles.profileText}>
                <p className={styles.profileName}>{props.profileData.name}</p>
                <p className={styles.profileAddress}>
                  {props.profileData.address}
                </p>
              </div>
            </div>
            <StatisticsArea statistics={props.statistics} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
