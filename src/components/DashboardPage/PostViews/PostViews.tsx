import React from "react";
import styles from "./PostViews.module.css";
import commonStyles from "../DashboardPage.module.css";
import { PostViewsState } from "../../../redux/dashboard-reducer";

interface Props {
  postViews: PostViewsState;
}

const PostViews: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.postViews} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>POST VIEWS</h2>
      {props && (
        <>
          <div className={commonStyles.number}>{props.postViews.number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {props.postViews.procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default PostViews;
