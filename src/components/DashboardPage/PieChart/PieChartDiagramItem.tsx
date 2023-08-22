import React from "react";
import styles from "./PieChart.module.css";
import { useState } from "react";

interface Props {
  classname: string;
  d: string;
}

const PieChartDiagramItem: React.FC<Props> = (props) => {
  let [diagramItemHover, setDiagramItemHover] = useState(false);
  return (
    <path
      className={
        diagramItemHover
          ? `${styles[props.classname]} ${styles.diagramItemHover}`
          : `${styles[props.classname]}`
      }
      fill="none"
      stroke-width="40"
      d={props.d}
      onMouseOver={() => setDiagramItemHover(true)}
      onMouseOut={() => setDiagramItemHover(false)}
    />
  );
};

export default PieChartDiagramItem;
