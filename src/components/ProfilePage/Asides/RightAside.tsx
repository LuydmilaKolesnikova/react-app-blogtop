import React from "react";
import styles from "./Asides.module.css";
import Submisstions from "./Submisstions";
import Images from "./Images";

const RightAside = () => {
  return (
    <aside className={`${styles.aside} ${styles.rightAside}`}>
      <Submisstions />
      <Images />
    </aside>
  );
};

export default RightAside;
