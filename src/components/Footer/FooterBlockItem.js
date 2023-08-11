import styles from "./Footer.module.css";
import { useState } from "react";

const FooterBlockItem = ({ avatar, postName, time }) => {
  let [postNameHover, setPostNameHover] = useState(false);
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="" />
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
          {postName}
        </h4>
        <p className={styles.postTime}>{time}</p>
      </div>
    </div>
  );
};

export default FooterBlockItem;
