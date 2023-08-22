import React from "react";
import styles from "./Upvotes.module.css";
import commonStyles from "../DashboardPage.module.css";
import { UpvotesState } from "../../../redux/dashboard-reducer";

interface Props {
  upvotes: UpvotesState;
}

const Upvotes: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.upvotes} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>UPVOTES</h2>
      {props && (
        <>
          <div className={commonStyles.number}>{props.upvotes.number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {props.upvotes.procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default Upvotes;
