import styles from "./GraphChart.module.css";
import commonStyles from "../DashboardPage.module.css";
import { useState } from "react";
import GraphChartItem from "./GraphChartItem";

const data = {
  axis: [50, 40, 30, 20, 10, 0],
};

const GraphChart = ({ graphChart }) => {
  const countToY = (data) => {
    const width = 230;
    const maxCount = 50;
    return data.map((view) => ({
      number: view.count,
      height: (width / maxCount) * view.count,
      y: 230 - (width / maxCount) * view.count,
      label: view.month,
    }));
  };

  const [axis] = useState(data.axis);
  const points = graphChart && countToY(graphChart.views);

  return (
    <div className={`${styles.graphChart} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>GRAPH CHART VIEWS</h2>
      <div className={styles.area}>
        {graphChart && (
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
              {points.map((p, index) => (
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

/* const GraphChart = ({ graphChart }) => {
  const countToY = (data) => {
    const width = 230;
    const maxCount = 50;
    return data.map((view) => ({
      number: view.count,
      height: (width / maxCount) * view.count,
      y: 230 - (width / maxCount) * view.count,
      label: view.month,
    }));
  };

  const [details] = useState(data);
  const [axis] = useState(data.axis);
  const points = countToY(details.views);

  return (
    <div className={`${styles.graphChart} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>GRAPH CHART VIEWS</h2>
      <div className={styles.area}>
        <div className={styles.axis}>
          {axis.map((a, index) => (
            <p className={styles.axisLabel} key={index}>
              {a}k
            </p>
          ))}
        </div>
        <div className={styles.details}>
          {points.map((p, index) => (
            <GraphChartItem
              key={index}
              y={p.y}
              height={p.height}
              number={p.number}
              label={p.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
 */
