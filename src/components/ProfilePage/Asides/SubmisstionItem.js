import { useState } from "react";
import styles from "./Asides.module.css";

const SubmisstionItem = ({ avatar, action, postName, postTime }) => {
  let [submisstionInfoHover, setSubmisstionInfoHover] = useState(false);

  return (
    <div className={styles.submisstionItem}>
      <img className={styles.submisstionIcon} src={avatar} alt="" />
      <div
        className={
          submisstionInfoHover
            ? `${styles.submisstionInfo} ${styles.submisstionInfoHover}`
            : styles.submisstionInfo
        }
        onMouseOver={() => setSubmisstionInfoHover(true)}
        onMouseOut={() => setSubmisstionInfoHover(false)}
      >
        <span className={styles.submisstionAction}>{action}</span>
        <span className={styles.submisstionPostName}>{postName}</span>
        <p className={styles.submisstionTime}>{postTime}</p>
      </div>
    </div>
  );
};

export default SubmisstionItem;
