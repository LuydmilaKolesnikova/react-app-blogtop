import React from "react";
import styles from "./PieChart.module.css";
import commonStyles from "../DashboardPage.module.css";
import PieChartLegendItem from "./PieChartLegendItem";
import PieChartDiagramItem from "./PieChartDiagramItem";

const PieChart = ({ pieChart }) => {
  const angles = (os, allVisitors) => {
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

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
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

  const pathD = pieChart && angles(pieChart.os, pieChart.allVisitors);

  return (
    <div className={`${styles.pieChart} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>PIE CHART</h2>
      <div className={styles.area}>
        {pieChart && (
          <>
            <div className={styles.diagram}>
              <svg width="260" height="260" xmlns="http://www.w3.org/2000/svg">
                {pathD.map((d, index) => {
                  let classname = "diagram" + pieChart.os[index].osName;
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
                {pieChart.allVisitors}k
              </div>
              {pieChart.os.map((os, index) => {
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
