import React from "react";
import styles from "./ProfilePage.module.css";
import LeftAside from "./Asides/LeftAside.tsx";
import RightAside from "./Asides/RightAside.tsx";
import MyPosts from "./MyPosts/MyPosts.tsx";

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
