import React, { useState } from "react";
import styles from "./Asides.module.css";

interface Props {
  avatar: string;
  action: string;
  postName: string;
  postTime: string;
}

const SubmisstionItem: React.FC<Props> = (props) => {
  let [submisstionInfoHover, setSubmisstionInfoHover] = useState(false);

  return (
    <div className={styles.submisstionItem}>
      <img className={styles.submisstionIcon} src={props.avatar} alt="" />
      <div
        className={
          submisstionInfoHover
            ? `${styles.submisstionInfo} ${styles.submisstionInfoHover}`
            : styles.submisstionInfo
        }
        onMouseOver={() => setSubmisstionInfoHover(true)}
        onMouseOut={() => setSubmisstionInfoHover(false)}
      >
        <span className={styles.submisstionAction}>{props.action}</span>
        <span className={styles.submisstionPostName}>{props.postName}</span>
        <p className={styles.submisstionTime}>{props.postTime}</p>
      </div>
    </div>
  );
};

export default SubmisstionItem;
