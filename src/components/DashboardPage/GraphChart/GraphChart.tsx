import React, { useState } from "react";
import styles from "./GraphChart.module.css";
import commonStyles from "../DashboardPage.module.css";
import GraphChartItem from "./GraphChartItem";
import {
  GraphChartState,
  GraphChartViewState,
} from "../../../redux/dashboard-reducer";

interface Props {
  graphChart: GraphChartState;
}

interface Point {
  height: number;
  number: number;
  label: string;
  y: number;
}

const data = {
  axis: [50, 40, 30, 20, 10, 0],
};

const GraphChart: React.FC<Props> = (props) => {
  const countToY = (data: Array<GraphChartViewState>) => {
    const width = 230;
    const maxCount = 50;
    return data.map((view: GraphChartViewState) => ({
      number: view.count,
      height: (width / maxCount) * view.count,
      y: 230 - (width / maxCount) * view.count,
      label: view.month,
    }));
  };

  const [axis] = useState(data.axis);
  const points = props.graphChart && countToY(props.graphChart.views);

  return (
    <div className={`${styles.graphChart} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>GRAPH CHART VIEWS</h2>
      <div className={styles.area}>
        {props.graphChart && (
          <>
            {" "}
            <div className={styles.axis}>
              {axis.map((a, index) => (
                <p className={styles.axisLabel} key={index}>
                  {a}k
                </p>
              ))}
            </div>
            <div className={styles.details}>
              {points.map((p: Point, index: number) => (
                <GraphChartItem
                  key={index}
                  y={p.y}
                  height={p.height}
                  number={p.number}
                  label={p.label}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GraphChart;
