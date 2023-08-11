import styles from "./GraphChart.module.css";
import { useState } from "react";

const GraphChartItem = ({ y, height, number, label }) => {
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
        <rect x="0" y={y} width="40" height={height} />
        {itemHover && (
          <text
            x="20"
            y={y + 15}
            width="40"
            font-size="12px"
            text-anchor="middle"
            fill="#fff"
            className={styles.graphChartText}
          >
            {number}k
          </text>
        )}
      </svg>
      <div className={styles.itemLabel}>{label}</div>
    </div>
  );
};

export default GraphChartItem;
