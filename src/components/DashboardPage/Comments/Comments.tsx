import React from "react";
import styles from "./Comments.module.css";
import commonStyles from "../DashboardPage.module.css";
import { CommentsState } from "../../../redux/dashboard-reducer";

const Comments = ({ number, procent }: any) => {
  return (
    <div className={`${styles.comments} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>COMMENTS</h2>
      {{ number, procent } && (
        <>
          <div className={commonStyles.number}>{number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
