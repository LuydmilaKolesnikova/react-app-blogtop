import React from "react";
import styles from "./HomePage.module.css";
import Collections from "./Collections/Collections";
import BannerArea from "./BannerArea/BannerArea";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <BannerArea />
      <div className={styles.container}>
        <Collections />
      </div>
    </div>
  );
};

export default HomePage;
