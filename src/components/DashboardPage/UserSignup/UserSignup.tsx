import React from "react";
import styles from "./UserSignup.module.css";
import commonStyles from "../DashboardPage.module.css";
import UserSignupItem from "./UserSignupItem.tsx";

const UserSignup = ({ userSignup }) => {
  return (
    <div className={`${styles.userSignup} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>USER SIGNUP</h2>
      {userSignup && (
        <div className={styles.area}>
          <div className={`${styles.item} ${styles.labels}`}>
            <div className={`${styles.name} ${styles.cell}`}>Name</div>
            <div className={`${styles.email} ${styles.cell}`}>Email</div>
            <div className={`${styles.time} ${styles.cell}`}>Time</div>
            <div className={`${styles.role} ${styles.cell}`}>Role</div>
          </div>
          {userSignup.users.map((user, index) => {
            let classname = "role" + user.role;
            return (
              <UserSignupItem
                key={index}
                name={user.name}
                email={user.email}
                time={user.time}
                role={user.role}
                classname={classname}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserSignup;
