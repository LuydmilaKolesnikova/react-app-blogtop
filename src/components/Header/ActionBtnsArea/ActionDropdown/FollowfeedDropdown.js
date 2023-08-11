import { useState } from "react";
import styles from "./ActionDropdown.module.css";
import { SettingsIcon } from "../../../SVG-icons/SVG-icons";
import avatar from "../../../../images/avatars/avatar4.jpg";

const data = [
  {
    name: "Dan Fisher",
    action: "follow",
    mutualCount: 10,
    status: "unfollow",
  },
  {
    name: "Bob Biden",
    action: "follow",
    mutualCount: 252,
    status: "follow",
  },
  {
    name: "Pete Brown",
    action: "follow",
    mutualCount: 343,
    status: "block",
  },
  {
    name: "Elen Dark",
    action: "follow",
    mutualCount: 0,
    status: "unfollow",
  },
  {
    name: "Ann White",
    action: "follow",
    mutualCount: 41,
    status: "follow",
  },
];

export default function FollowfeedDropdown() {
  let [actions] = useState(data);

  return (
    <div className={styles.dropDown}>
      <div className={styles.title}>
        <span className={styles.caption}>Followfeed</span>
        <SettingsIcon />
      </div>
      {actions.map((item, index) => (
        <div key={index} className={styles.item}>
          <img className={styles.avatar} src={avatar} alt="" />
          <div className={styles.info}>
            <div className={styles.infoTop}>
              <div className={styles.text}>
                <span className={styles.name}>{item.name}</span>
                <span
                  className={styles.action}
                >{` started ${item.action}ing you.`}</span>
              </div>
              <div
                className={`${styles.infoBottom} ${styles.followfeedInfoBottom}`}
              >
                {item.mutualCount !== 0 && (
                  <span
                    className={styles.mutualCount}
                  >{`${item.mutualCount} mutual`}</span>
                )}
                <div className={styles.actionBtns}>
                  <button className={`${styles.followBtn} ${styles.statusBtn}`}>
                    {item.status === "follow" ? "UNFOLLOW" : "FOLLOW BACK"}
                  </button>
                  <button className={`${styles.blockBtn} ${styles.statusBtn}`}>
                    {item.status === "block" ? "UNBLOCK" : "BLOCK"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className={`${styles.footerBtn} ${styles.footerFollowfeedBtn}`}>
        CHECK ALL FOLLOW REQUESTS
      </button>
    </div>
  );
}
