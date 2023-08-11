import styles from "./StatisticsArea.module.css";
import { useState } from "react";
import StatisticsInfoBlock from "./StatisticsInfoBlock";

const data = [
  { title: "Posts", name: "posts" },
  { title: "Followers", name: "followers" },
  { title: "Following", name: "following" },
];

const StatisticsArea = ({ statistics }) => {
  const [items] = useState(data);

  return (
    <div className={styles.statistics}>
      {items.map((item, index) => (
        <StatisticsInfoBlock
          key={index}
          title={item.title}
          count={statistics[item.name]}
        />
      ))}
    </div>
  );
};

export default StatisticsArea;
