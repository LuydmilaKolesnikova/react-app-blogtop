import styles from "./PieChart.module.css";

const PieChartLegendItem = ({ osName, classname }) => {
  return (
    <div className={styles.legendItem}>
      <svg className={`${styles[classname]}`} width="16px" height="16px">
        <circle r="8px" cx="8px" cy="8px" />
      </svg>
      <p className={styles.osName}>{osName}</p>
    </div>
  );
};

export default PieChartLegendItem;
