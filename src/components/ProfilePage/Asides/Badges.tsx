import React, { useState } from "react";
import styles from "./Asides.module.css";
import { NavLink } from "react-router-dom";
import badge1 from "../../../images/badges/badge1.png";
import badge2 from "../../../images/badges/badge2.png";
import badge3 from "../../../images/badges/badge3.png";
import badge4 from "../../../images/badges/badge4.png";
import badge5 from "../../../images/badges/badge5.png";
import badge6 from "../../../images/badges/badge6.png";
import badge7 from "../../../images/badges/badge1.png";

const data = [
  { badge: badge1, count: 5 },
  { badge: badge2, count: 1 },
  { badge: badge3, count: 0 },
  { badge: badge4, count: 2 },
  { badge: badge5, count: 0 },
  { badge: badge6, count: 2 },
  { badge: badge7, count: 0 },
];

const Badges = () => {
  const [badges] = useState(data);
  return (
    <div className={`${styles.badges} ${styles.block}`}>
      <h2 className={styles.title}>BADGES</h2>
      <div className={styles.badgesIcons}>
        {badges.map((badge, index) => (
          <NavLink key={index} className={styles.badgeItem}
            to="">
            <img className={styles.badgeIcon} src={badge.badge} alt="" />
            {badge.count > 0 && (
              <p className={styles.badgeCount}>{badge.count}</p>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Badges;
