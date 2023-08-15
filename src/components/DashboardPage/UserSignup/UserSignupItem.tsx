import React from "react";
import styles from "./UserSignup.module.css";

const UserSignupItem = ({ name, email, time, role, classname }) => {
  return (
    <div className={styles.item}>
      <div className={`${styles.name} ${styles.cell}`}>{name}</div>
      <div className={`${styles.email} ${styles.cell}`}>{email}</div>
      <div className={`${styles.time} ${styles.cell}`}>{time}</div>
      <div className={`${styles.role} ${styles.cell}`}>
        <div className={`${styles.roleMarker} ${styles[classname]}`}>
          {role}
        </div>
      </div>
    </div>
  );
};

export default UserSignupItem;
