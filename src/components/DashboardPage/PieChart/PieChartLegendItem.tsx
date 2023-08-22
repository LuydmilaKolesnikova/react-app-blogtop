import React from "react";
import styles from "./PieChart.module.css";

interface Props {
  osName: string;
  classname: string;
}

const PieChartLegendItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.legendItem}>
      <svg className={`${styles[props.classname]}`} width="16px" height="16px">
        <circle r="8px" cx="8px" cy="8px" />
      </svg>
      <p className={styles.osName}>{props.osName}</p>
    </div>
  );
};

export default PieChartLegendItem;
