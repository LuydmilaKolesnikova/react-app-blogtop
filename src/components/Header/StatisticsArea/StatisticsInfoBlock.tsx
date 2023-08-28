import React from "react";
import styles from "./StatisticsArea.module.css";

interface Props {
  title: string;
  count: number;
}

const StatisticsInfoBlock: React.FC<Props> = (props) => {
  return (
    <div className={styles.statisticsItem}>
      <div className={styles.statisticsTitle}>{props.title}</div>
      <div className={styles.statisticsInfo}>{props.count}</div>
    </div>
  );
};

export default StatisticsInfoBlock;
