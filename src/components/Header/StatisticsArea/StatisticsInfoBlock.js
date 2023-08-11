import styles from "./StatisticsArea.module.css";

const StatisticsInfoBlock = ({ title, count }) => {
  return (
    <div className={styles.statisticsItem}>
      <div className={styles.statisticsTitle}>{title}</div>
      <div className={styles.statisticsInfo}>{count}</div>
    </div>
  );
};

export default StatisticsInfoBlock;
