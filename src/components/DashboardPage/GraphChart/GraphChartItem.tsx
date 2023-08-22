import React from "react";
import styles from "./GraphChart.module.css";
import { useState } from "react";

interface Props {
  y: number;
  height: number;
  number: number;
  label: string;
}

const GraphChartItem: React.FC<Props> = (props) => {
  let [itemHover, setItemHover] = useState(false);

  return (
    <div
      className={styles.item}
      onMouseOver={() => setItemHover(true)}
      onMouseOut={() => setItemHover(false)}
    >
      <svg
        width="40"
        height="230"
        viewBox="0 0 40 230"
        xmlns="http://www.w3.org/2000/svg"
        fill="#3599EA"
      >
        <rect x="0" y={props.y} width="40" height={props.height} />
        {itemHover && (
          <text
            x="20"
            y={props.y + 15}
            width="40"
            font-size="12px"
            text-anchor="middle"
            fill="#fff"
            className={styles.graphChartText}
          >
            {props.number}k
          </text>
        )}
      </svg>
      <div className={styles.itemLabel}>{props.label}</div>
    </div>
  );
};

export default GraphChartItem;
