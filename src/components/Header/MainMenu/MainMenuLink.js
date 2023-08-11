import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";

const MainMenuLink = ({ link, title }) => {
  let [linkHover, setLinkHover] = useState(false);
  return (
    <li
      onMouseOver={() => setLinkHover(true)}
      onMouseOut={() => setLinkHover(false)}
    >
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? styles.mainMenuLinkActive
            : linkHover
            ? styles.mainMenuLinkHover
            : null
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MainMenuLink;
