import React, { useState } from "react";
import styles from "./Asides.module.css";
import { NavLink } from "react-router-dom";
import twitter from "../../../images/socials/twitter.png";
import pinterest from "../../../images/socials/pinterest.png";

const data = [twitter, pinterest];

const Social = () => {
  const [socials] = useState(data);
  return (
    <div className={`${styles.friends} ${styles.block}`}>
      <h2 className={styles.title}>SOCIAL SHARING</h2>
      <div className={styles.socialIcons}>
        {socials.map((social, index) => (
          <NavLink key={index}
            to="">            
            <img className={styles.socialIcon} src={social} alt="" />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Social;
