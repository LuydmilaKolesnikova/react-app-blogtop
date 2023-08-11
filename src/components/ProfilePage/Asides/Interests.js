import { useState } from "react";
import styles from "./Asides.module.css";

const data = [
  "Arts",
  "Beauty",
  "Entertainment",
  "Travel",
  "Personal",
  "Politics",
  "Science",
];

const Interests = () => {
  const [interests] = useState(data);
  return (
    <div className={`${styles.interests} ${styles.block}`}>
      <h2 className={styles.title}>MY INTERESTS</h2>
      {interests.map((interest, index) => (
        <p key={index} className={styles.interest}>
          {interest}
        </p>
      ))}
    </div>
  );
};

export default Interests;
