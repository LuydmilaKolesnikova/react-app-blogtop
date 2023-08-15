import React from "react";
import styles from "./Comments.module.css";
import commonStyles from "../DashboardPage.module.css";

const Comments = ({ comments }) => {
  return (
    <div className={`${styles.comments} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>COMMENTS</h2>
      {comments && (
        <>
          <div className={commonStyles.number}>{comments.number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {comments.procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
