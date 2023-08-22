import React from "react";
import styles from "./UserSignup.module.css";
import commonStyles from "../DashboardPage.module.css";
import UserSignupItem from "./UserSignupItem";
import {
  UserSignupState,
  UserSignupUserState,
} from "../../../redux/dashboard-reducer";

interface Props {
  userSignup: UserSignupState;
}

const UserSignup: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.userSignup} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>USER SIGNUP</h2>
      {props && (
        <div className={styles.area}>
          <div className={`${styles.item} ${styles.labels}`}>
            <div className={`${styles.name} ${styles.cell}`}>Name</div>
            <div className={`${styles.email} ${styles.cell}`}>Email</div>
            <div className={`${styles.time} ${styles.cell}`}>Time</div>
            <div className={`${styles.role} ${styles.cell}`}>Role</div>
          </div>
          {props.userSignup.users.map(
            (user: UserSignupUserState, index: number) => {
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
            }
          )}
        </div>
      )}
    </div>
  );
};

export default UserSignup;
