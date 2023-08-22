import React from "react";
import styles from "./UserSignup.module.css";

interface Props {
  name: string;
  email: string;
  time: string;
  role: string;
  classname: string;
}

const UserSignupItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.item}>
      <div className={`${styles.name} ${styles.cell}`}>{props.name}</div>
      <div className={`${styles.email} ${styles.cell}`}>{props.email}</div>
      <div className={`${styles.time} ${styles.cell}`}>{props.time}</div>
      <div className={`${styles.role} ${styles.cell}`}>
        <div className={`${styles.roleMarker} ${styles[props.classname]}`}>
          {props.role}
        </div>
      </div>
    </div>
  );
};

export default UserSignupItem;
