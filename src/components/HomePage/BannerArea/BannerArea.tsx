import React from "react";
import styles from "./BannerArea.module.css";
import banner from "../../../images/home-banner.jpg";

const BannerArea = () => {
  return (
    <div className={styles.bannerArea}>
      <img
        className={styles.banner}
        src={banner}
        alt=""
        style={{ height: "calc(100vh - 80px)" }}
      />
      <h1 className={styles.title}>PERFECT PLACE FOR YOUR STORIES</h1>
      <div className={styles.scrollDownArea}>
        <div className={styles.scrollDownText}>SCROLL DOWN</div>
        <svg
          className={styles.scrollDownArrow}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#fff"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </div>
    </div>
  );
};

export default BannerArea;
