import { useState } from "react";
import styles from "./Asides.module.css";
import avatar1 from "../../../images/submisstions/avatar1.png";
import avatar2 from "../../../images/submisstions/avatar2.png";
import avatar3 from "../../../images/submisstions/avatar3.png";
import avatar4 from "../../../images/submisstions/avatar4.png";
import avatar5 from "../../../images/submisstions/avatar5.png";
import SubmisstionItem from "./SubmisstionItem";

const data = [
  {
    avatar: avatar1,
    action: "You submitted a new photo to ",
    postName: "How To Talk With Girls",
    postTime: "2 days ago",
  },
  {
    avatar: avatar2,
    action: "You contributed a new paragraph to ",
    postName: "10 Ways To Make Easy Suicide",
    postTime: "3 days ago",
  },
  {
    avatar: avatar3,
    action: "You submitted a new photo to ",
    postName: "Best Photos of The Tech Giants",
    postTime: "4 days ago",
  },
  {
    avatar: avatar4,
    action: "You submitted a new photo to ",
    postName: "How To Talk With Girls",
    postTime: "5 days ago",
  },
  {
    avatar: avatar5,
    action: "You contributed a new paragraph to ",
    postName: "10 Ways To Make Easy Suicide",
    postTime: "10 days ago",
  },
];

const Submisstions = () => {
  const [submisstions] = useState(data);

  return (
    <div className={`${styles.submisstions} ${styles.block}`}>
      <h2 className={styles.title}>MY SUBMISSTIONS</h2>
      <div>
        {submisstions.map((submisstion, index) => (
          <SubmisstionItem
            key={index}
            avatar={submisstion.avatar}
            action={submisstion.action}
            postName={submisstion.postName}
            postTime={submisstion.postTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Submisstions;
