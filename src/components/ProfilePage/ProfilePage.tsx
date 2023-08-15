import React from "react";
import styles from "./ProfilePage.module.css";
import LeftAside from "./Asides/LeftAside";
import RightAside from "./Asides/RightAside";
import MyPosts from "./MyPosts/MyPosts";

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.container}>
        <LeftAside />
        <MyPosts />
        <RightAside />
      </div>
    </div>
  );
};

export default ProfilePage;
