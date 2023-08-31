import React from "react";
import styles from "./LineGraph.module.css";
import commonStyles from "../DashboardPage.module.css";
import * as d3 from "d3";
import { LineGraphState } from "../../../redux/dashboard-reducer";

interface Props {
  lineGraph: LineGraphState;
}

const LineGraph: React.FC<Props> = (props) => {
  let getY: any;
  let getX: any;
  let getYAxis: any;
  let getXAxis: any;
  let linePath: any;
  let areaPath: any;

  if (props.lineGraph) {
    console.log(props.lineGraph);
    getY = d3
      .scaleLinear()
      .domain([
        0,
        props.lineGraph.points[props.lineGraph.points.length - 1][0] + 10,
      ])
      .range([280, 0]);

    getX = d3
      .scaleLinear()
      .domain([
        props.lineGraph.points[0][1],
        props.lineGraph.points[props.lineGraph.points.length - 1][1],
      ])
      .range([50, 1460]);

    getYAxis = (ref: any) => {
      const yAxis = d3.axisLeft(getY);
      d3.select(ref).call(yAxis);
    };

    getXAxis = (ref: any) => {
      const xAxis = d3.axisBottom(getX);
      d3.select(ref).call(xAxis);
    };

    linePath = d3
      .line()
      .x((d) => getX(d[1]))
      .y((d) => getY(d[0]))
      .curve(d3.curveMonotoneX)(props.lineGraph.points);

    areaPath = d3
      .area()
      .x((d) => getX(d[1]))
      .y0((d) => getY(d[0]))
      .y1(() => getY(0))
      .curve(d3.curveMonotoneX)(props.lineGraph.points);
  }

  return (
    <div className={`${styles.lineGraph} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>LINE GRAPH WITH GRADIENT</h2>
      {props.lineGraph && (
        <div className={styles.area}>
          <svg width={1484} height={330}>
            <g ref={getYAxis} transform={`translate(50)`} />
            {<g ref={getXAxis} transform={`translate(0,${getY(0)})`} />}
            {props.lineGraph.points.map(
              (item: [number, number], index: number) => (
                <g key={index}>
                  <circle
                    cx={getX(item[1])}
                    cy={getY(item[0])}
                    r={4}
                    fill="#7CB5EC"
                  />
                  <text
                    fill="#666"
                    x={getX(item[1])}
                    y={getY(item[0]) - 10}
                    textAnchor="middle"
                  >
                    {item[0]}
                  </text>
                  <path
                    strokeWidth={3}
                    fill="none"
                    stroke="#7cb5ec"
                    d={linePath}
                  />
                  <path fill="#7cb5ec" d={areaPath} opacity={0.02} />
                </g>
              )
            )}
          </svg>
        </div>
      )}
    </div>
  );
};

export default LineGraph;
