import React, { useState } from "react";
import styles from "./Asides.module.css";
import { NavLink } from "react-router-dom";
import avatar1 from "../../../images/avatars/avatar1.jpg";
import avatar2 from "../../../images/avatars/avatar2.jpg";
import avatar3 from "../../../images/avatars/avatar3.jpg";
import avatar4 from "../../../images/avatars/avatar4.jpg";
import avatar5 from "../../../images/avatars/avatar5.jpg";
import avatar6 from "../../../images/avatars/avatar1.jpg";
import avatar7 from "../../../images/avatars/avatar2.jpg";
import avatar8 from "../../../images/avatars/avatar3.jpg";
import avatar9 from "../../../images/avatars/avatar4.jpg";
import avatar10 from "../../../images/avatars/avatar5.jpg";

const data = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar7,
  avatar8,
];

const Friends = () => {
  const [friends] = useState(data);
  return (
    <div className={`${styles.friends} ${styles.block}`}>
      <h2 className={styles.title}>MY FRIENDS</h2>
      <div className={styles.friendsIcons}>
        {friends.map((friend, index) => (
          <NavLink key={index}>
            <img className={styles.friendIcon} src={friend} alt="" />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Friends;
