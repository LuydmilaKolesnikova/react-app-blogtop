import React, { useState } from "react";
import styles from "./Footer.module.css";

interface Props {
  avatar: string;
  postName: string;
  time: string;
}

const FooterBlockItem: React.FC<Props> = (props) => {
  let [postNameHover, setPostNameHover] = useState(false);
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={props.avatar} alt="" />
      <div className={styles.info}>
        <h4
          className={
            postNameHover
              ? `${styles.postName} ${styles.postNameHover}`
              : styles.postName
          }
          onMouseOver={() => setPostNameHover(true)}
          onMouseOut={() => setPostNameHover(false)}
        >
          {props.postName}
        </h4>
        <p className={styles.postTime}>{props.time}</p>
      </div>
    </div>
  );
};

export default FooterBlockItem;
