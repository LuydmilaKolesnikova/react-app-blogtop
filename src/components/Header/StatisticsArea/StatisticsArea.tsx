import React, { useState } from "react";
import styles from "./StatisticsArea.module.css";
import StatisticsInfoBlock from "./StatisticsInfoBlock";
import { StatisticsState } from "../../../redux/header-reducer";

interface Props {
  statistics: StatisticsState;
}

const StatisticsArea: React.FC<Props> = (props) => {
  const elements = [];
  for (let property in props.statistics) {
    elements.push(
      <StatisticsInfoBlock
        title={property}
        count={props.statistics[property]}
      />
    );
  }
  return <div className={styles.statistics}>{elements}</div>;
};

export default StatisticsArea;
