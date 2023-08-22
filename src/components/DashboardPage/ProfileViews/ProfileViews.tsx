import React from "react";
import styles from "./ProfileViews.module.css";
import commonStyles from "../DashboardPage.module.css";
import { ProfileViewsState } from "../../../redux/dashboard-reducer";

interface Props {
  profileViews: ProfileViewsState;
}

const ProfileViews: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.profileViews} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>PROFILE VIEWS</h2>
      {props && (
        <>
          <div className={commonStyles.number}>{props.profileViews.number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {props.profileViews.procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileViews;
