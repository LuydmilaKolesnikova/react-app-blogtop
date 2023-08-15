import React from "react";
import styles from "./ProfileViews.module.css";
import commonStyles from "../DashboardPage.module.css";

const ProfileViews = ({ profileViews }) => {
  return (
    <div className={`${styles.profileViews} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>PROFILE VIEWS</h2>
      {profileViews && (
        <>
          <div className={commonStyles.number}>{profileViews.number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {profileViews.procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileViews;
