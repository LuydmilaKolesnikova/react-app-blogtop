import React from "react";
import styles from "./Upvotes.module.css";
import commonStyles from "../DashboardPage.module.css";

const Upvotes = ({ upvotes }) => {
  return (
    <div className={`${styles.upvotes} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>UPVOTES</h2>
      {upvotes && (
        <>
          <div className={commonStyles.number}>{upvotes.number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {upvotes.procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default Upvotes;
