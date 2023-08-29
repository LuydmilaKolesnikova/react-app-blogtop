import React, { useState, useContext } from "react";
import styles from "./ProfileMenu.module.css";
import ProfileMenuDropdown from "./ProfileMenuDropdown";
import profileIcon from "../../../images/profile-icon.jpg";
import LocationContext, {
  LocationContextType,
} from "../../../utils/context/LocationProvider";
import { useLocation } from "react-router-dom";

const ProfileMenu = () => {
  let [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const { setLocation } = useContext(LocationContext) as LocationContextType;
  const loc = useLocation();

  const setLocationPath = () => {
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
      onMouseDown={() => setLocationPath()}
    >
      <img src={profileIcon} alt="" />
      {profileMenuVisible && <ProfileMenuDropdown />}
    </button>
  );
};

export default ProfileMenu;
