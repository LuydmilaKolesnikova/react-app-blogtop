import React from "react";
import styles from "./PieChart.module.css";
import { useState } from "react";

const PieChartDiagramItem = ({ classname, d }) => {
  let [diagramItemHover, setDiagramItemHover] = useState(false);
  return (
    <path
      className={
        diagramItemHover
          ? `${styles[classname]} ${styles.diagramItemHover}`
          : `${styles[classname]}`
      }
      fill="none"
      stroke-width="40"
      d={d}
      onMouseOver={() => setDiagramItemHover(true)}
      onMouseOut={() => setDiagramItemHover(false)}
    />
  );
};

export default PieChartDiagramItem;
