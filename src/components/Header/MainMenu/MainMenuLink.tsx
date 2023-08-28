import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";

interface Props {
  link: string;
  title: string;
}

const MainMenuLink: React.FC<Props> = (props) => {
  let [linkHover, setLinkHover] = useState(false);
  return (
    <li
      onMouseOver={() => setLinkHover(true)}
      onMouseOut={() => setLinkHover(false)}
    >
      <NavLink
        to={props.link}
        className={({ isActive }) =>
          isActive
            ? styles.mainMenuLinkActive
            : linkHover
            ? styles.mainMenuLinkHover
            : undefined
        }
      >
        {props.title}
      </NavLink>
    </li>
  );
};

export default MainMenuLink;
