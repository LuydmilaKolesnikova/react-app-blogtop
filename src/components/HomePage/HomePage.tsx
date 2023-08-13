import React from "react";
import styles from "./HomePage.module.css";
import Collections from "./Collections/Collections.tsx";
import BannerArea from "./BannerArea/BannerArea.tsx";

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
