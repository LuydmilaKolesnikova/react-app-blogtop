import React, { useState } from "react";
import styles from "./MainMenu.module.css";
import MainMenuLink from "./MainMenuLink.tsx";
import { MobileMainMenuIcon } from "../../SVG-icons/SVG-icons.tsx";

const data = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Dashboard",
    link: "/dashboard",
  },
];

const MainMenu = () => {
  const [navs] = useState(data);
  let [mobileMainMenuVisible, setMobileMainMenuVisible] = useState(false);

  return (
    <>
      <button
        className={styles.mobileMainMenuBtn}
        onMouseDown={() => setMobileMainMenuVisible(!mobileMainMenuVisible)}
      >
        <MobileMainMenuIcon />
      </button>
      <nav
        className={
          mobileMainMenuVisible ? styles.mobileMainMenu : styles.mainMenu
        }
      >
        <ul>
          {navs.map((nav, index) => (
            <MainMenuLink key={index} link={nav.link} title={nav.title} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
