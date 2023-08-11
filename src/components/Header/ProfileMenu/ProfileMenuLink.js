import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProfileMenu.module.css";

export default function ProfileMenuLink({ to, icon, text }) {
  let [profileMenuLinkHover, setProfileLinkHover] = useState(false);

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.active : null)}
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
          {icon}
          <span>{text}</span>
        </div>
      </NavLink>
    </li>
  );
}
