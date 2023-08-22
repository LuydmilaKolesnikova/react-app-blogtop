import React from "react";
import styles from "./PieChart.module.css";
import commonStyles from "../DashboardPage.module.css";
import PieChartLegendItem from "./PieChartLegendItem";
import PieChartDiagramItem from "./PieChartDiagramItem";
import {
  PieChartState,
  PieChartOsState,
} from "../../../redux/dashboard-reducer";

interface Props {
  pieChart: PieChartState;
}

const PieChart: React.FC<Props> = (props) => {
  const angles = (os: Array<PieChartOsState>, allVisitors: number) => {
    let angleArr = [0];

    for (let i = 0; i < os.length; i++) {
      angleArr[i + 1] = angleArr[i] + (360 * os[i].count) / allVisitors;
    }

    let angleObj = [];
    for (let i = 1; i < angleArr.length; i++) {
      angleObj.push({
        startAngle: angleArr[i - 1],
        endAngle: angleArr[i],
      });
    }

    let pathD = [];

    pathD = angleObj.map((a) =>
      describeArc(130, 130, 100, a.startAngle, a.endAngle)
    );
    return pathD;
  };

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    let start = polarToCartesian(x, y, radius, endAngle);
    let end = polarToCartesian(x, y, radius, startAngle);

    let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    let d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");

    return d;
  };

  const pathD =
    props.pieChart && angles(props.pieChart.os, props.pieChart.allVisitors);

  return (
    <div className={`${styles.pieChart} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>PIE CHART</h2>
      <div className={styles.area}>
        {props && (
          <>
            <div className={styles.diagram}>
              <svg width="260" height="260" xmlns="http://www.w3.org/2000/svg">
                {pathD.map((d: string, index: number) => {
                  let classname = "diagram" + props.pieChart.os[index].osName;
                  return (
                    <PieChartDiagramItem
                      key={index}
                      d={d}
                      classname={classname}
                    />
                  );
                })}
              </svg>
            </div>
            <div className={styles.legend}>
              <div className={styles.allVisitors}>ALL VISITORS</div>
              <div className={styles.totalVisitorsCount}>
                {props.pieChart.allVisitors}k
              </div>
              {props.pieChart.os.map((os, index) => {
                let classname = "legend" + os.osName;
                return (
                  <PieChartLegendItem
                    key={index}
                    osName={os.osName}
                    classname={classname}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PieChart;
