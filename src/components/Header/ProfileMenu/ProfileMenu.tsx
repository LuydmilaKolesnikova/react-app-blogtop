import React, { useState, useContext } from "react";
import styles from "./ProfileMenu.module.css";
import ProfileMenuDropdown from "./ProfileMenuDropdown";
import profileIcon from "../../../images/profile-icon.jpg";
import LocationContext from "../../../utils/context/LocationProvider";
import { useLocation } from "react-router-dom";

const ProfileMenu = () => {
  let [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const { location, setLocation} = useContext(LocationContext);
  const loc = useLocation();

  const setLocation1 = () => {
    setLocation(loc.pathname);
  };

  return (
    <button
      className={styles.profileMenuBtn}
      onMouseOver={() => {
        setProfileMenuVisible(true);
      }}
      onMouseOut={() => {
        setProfileMenuVisible(false);
      }}
      onMouseDown={() => setLocation1()}
    >
      <img src={profileIcon} alt="" />
      {profileMenuVisible && <ProfileMenuDropdown />}
    </button>
  );
};

export default ProfileMenu;
