import React from "react";
import styles from "./LineGraph.module.css";
import commonStyles from "../DashboardPage.module.css";
import * as d3 from "d3";

const LineGraph = ({ lineGraph }) => {
  let getY = null;
  let getX = null;
  let getYAxis = null;
  let getXAxis = null;
  let linePath = null;
  let areaPath = null;

  if (lineGraph) {
    getY = d3
      .scaleLinear()
      .domain([0, lineGraph.points[lineGraph.points.length - 1].newUsers + 10])
      .range([280, 0]);

    getX = d3
      .scaleLinear()
      .domain([
        lineGraph.points[0].year,
        lineGraph.points[lineGraph.points.length - 1].year,
      ])
      .range([50, 1460]);

    getYAxis = (ref) => {
      const yAxis = d3.axisLeft(getY);
      d3.select(ref).call(yAxis);
    };

    getXAxis = (ref) => {
      const xAxis = d3.axisBottom(getX);
      d3.select(ref).call(xAxis);
    };

    linePath = d3
      .line()
      .x((d) => getX(d[0]))
      .y((d) => getY(d[1]))
      .curve(d3.curveMonotoneX)(lineGraph.points);

    areaPath = d3
      .area()
      .x((d) => getX(d[0]))
      .y0((d) => getY(d[1]))
      .y1(() => getY(0))
      .curve(d3.curveMonotoneX)(lineGraph.points);
  }

  return (
    <div className={`${styles.lineGraph} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>LINE GRAPH WITH GRADIENT</h2>
      {lineGraph && (
        <div className={styles.area}>
          <svg width={1484} height={330}>
            <g ref={getYAxis} transform={`translate(50)`} />
            <g ref={getXAxis} transform={`translate(0,${getY(0)})`} />
            {lineGraph.points.map((item, index) => (
              <g key={index}>
                <circle
                  cx={getX(item.year)}
                  cy={getY(item.newUsers)}
                  r={4}
                  fill="#7CB5EC"
                />
                <text
                  fill="#666"
                  x={getX(item.year)}
                  y={getY(item.newUsers) - 10}
                  textAnchor="middle"
                >
                  {item.newUsers}
                </text>
                <path
                  strokeWidth={3}
                  fill="none"
                  stroke="#7cb5ec"
                  d={linePath}
                />
                <path fill="#7cb5ec" d={areaPath} opacity={0.02} />
              </g>
            ))}
          </svg>
        </div>
      )}
    </div>
  );
};

export default LineGraph;
