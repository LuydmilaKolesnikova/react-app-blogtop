import React, { useState } from "react";
import styles from "./ActionDropdown.module.css";
import { SettingsIcon } from "../../../SVG-icons/SVG-icons";
import avatar from "../../../../images/avatars/avatar4.jpg";

const data = [
  {
    name: "Margo Fisher",
    text: "commented on your photo",
    time: "now",
  },
  {
    name: "Bob Dilanggggggggggggggg gggggqqqqqqqqqqqqqqqqqqqqqqq qq",
    text: "downvoted your answer in a post",
    time: "17 min ago",
  },
  {
    name: "Ann Browntttttttttt tttttttttttttttt ttttttttttttttt ttttyyyyyyyyyyyyyyyyyyyyyyy",
    text: "commented on your post",
    time: "2 hours ago",
  },
  {
    name: "Sam Golden",
    text: "upvoted your answer in a post",
    time: "1 day ago",
  },
  {
    name: "Elena wolf",
    text: "submitted a new photo",
    time: "2 days ago",
  },
];

export default function NotificationsDropdown() {
  let [notifications] = useState(data);

  return (
    <div className={styles.dropDown}>
      <div className={styles.title}>
        <span className={styles.caption}>Notifications</span>
        <div>
          <button className={styles.markAllAsReadBtn}>Mark all as read</button>
          <SettingsIcon />
        </div>
      </div>
      {notifications.map((item, index) => (
        <div key={index} className={styles.item}>
          <img className={styles.avatar} src={avatar} alt="" />
          <div className={styles.info}>
            <div className={`${styles.notificationsInfoTop}`}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.time}>{item.time}</span>
            </div>
            <div className={styles.infoBottom}>
              <div className={styles.notification}>{item.text}</div>
            </div>
          </div>
        </div>
      ))}
      <button
        className={`${styles.footerBtn} ${styles.footerNotificationsBtn}`}
      >
        CHECK ALL NOTIFICATIONS
      </button>
    </div>
  );
}
