import React, { useState } from "react";
import styles from "./Asides.module.css";

const data = `I focus a lot on helping the first time or inexperienced traveler head out prepared and confident in themselves. Starting out as a old traveler can be intimidating.
  How do you jump into the gigantic travel fray and survive? How can you learn to love delays and long lines?`;

const AboutMe = () => {
  const [text] = useState(data);
  return (
    <div className={`${styles.aboutMe} ${styles.block}`}>
      <h2 className={styles.title}>ABOUT ME</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default AboutMe;
