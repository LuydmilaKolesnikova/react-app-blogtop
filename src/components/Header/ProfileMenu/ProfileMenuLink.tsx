import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProfileMenu.module.css";

interface Props {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const ProfileMenuLink: React.FC<Props> = (props) => {
  let [profileMenuLinkHover, setProfileLinkHover] = useState(false);

  return (
    <li>
      <NavLink
        to={props.to}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        onMouseOver={() => {
          setProfileLinkHover(true);
        }}
        onMouseOut={() => {
          setProfileLinkHover(false);
        }}
      >
        <div
          className={
            profileMenuLinkHover
              ? `${styles.menuLinkActive} ${styles.menuLink}`
              : styles.menuLink
          }
        >
          {props.icon}
          <span>{props.text}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default ProfileMenuLink;
