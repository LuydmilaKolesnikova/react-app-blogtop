import React from "react";
import styles from "./Comments.module.css";
import commonStyles from "../DashboardPage.module.css";
import { CommentsState } from "../../../redux/dashboard-reducer";

interface Props {
  comments: CommentsState;
}

const Comments: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.comments} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>COMMENTS</h2>
      {props && (
        <>
          <div className={commonStyles.number}>{props.comments.number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {props.comments.procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
