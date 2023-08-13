import React, { useState } from "react";
import styles from "./ActionDropdown.module.css";
import { SettingsIcon } from "../../../SVG-icons/SVG-icons.tsx";
import avatar from "../../../../images/avatars/avatar4.jpg";

const data = [
  {
    name: "Harry Khan",
    message: "Hi",
    time: "12:50",
  },
  {
    name: "Bobby Brown",
    message:
      "Hello! I need to talk about new project. Would you like to take part in it! Text me! Bye!",
    time: "35 min ago",
  },
  {
    name: "Pete Brown",
    message: "What's up!",
    time: "22 hours ago",
  },
  {
    name: "Ann Golden",
    message: "Have fun!",
    time: "24 years ago",
  },
  {
    name: "Elena Wolfrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr ttttttttttttttttttttttttttttttttttttttttt",
    message: "Bye! See your later!",
    time: "4 hours ago",
  },
];

export default function MessagesDropdown() {
  let [dialogs] = useState(data);

  return (
    <div className={styles.dropDown}>
      <div className={styles.title}>
        <span className={styles.caption}>Messages</span>
        <div>
          <button className={styles.markAllAsReadBtn}>Mark all as read</button>
          <SettingsIcon />
        </div>
      </div>
      {dialogs.map((item, index) => (
        <div key={index} className={styles.item}>
          <img className={styles.avatar} src={avatar} alt="" />
          <div className={styles.info}>
            <div className={`${styles.infoTop} ${styles.messagesInfoTop}`}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.time}>{item.time}</span>
            </div>
            <div className={styles.infoBottom}>
              <div className={styles.message}>{item.message}</div>
            </div>
          </div>
        </div>
      ))}
      <button className={`${styles.footerBtn} ${styles.footerMessagesBtn}`}>
        CHECK ALL MESSAGES
      </button>
    </div>
  );
}
