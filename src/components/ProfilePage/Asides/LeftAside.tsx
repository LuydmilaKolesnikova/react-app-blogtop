import React from "react";
import styles from "./Asides.module.css";
import AboutMe from "./AboutMe.tsx";
import Interests from "./Interests.tsx";
import Friends from "./Friends.tsx";
import Badges from "./Badges.tsx";
import Social from "./Social.tsx";

const LeftAside = () => {
  return (
    <aside className={`${styles.aside} ${styles.leftAside}`}>
      <AboutMe />
      <Interests />
      <Friends />
      <Badges />
      <Social />
    </aside>
  );
};

export default LeftAside;
