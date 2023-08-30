import React from "react";
import styles from "./ActionBtnsArea.module.css";
import ActionBtn from "./ActionBtn";
import { NewActionsState } from "../../../redux/header-reducer";

interface Props {
  newActions: NewActionsState;
}

const propertyToNode = (property: string, definition: string): string => {
  return property + definition;
};

const ActionBtnsArea: React.FC<Props> = (props) => {
  const elements = [];

  for (let property in props.newActions) {
    let dropdownComponent = propertyToNode(property, "Dropdown");
    let iconComponent = propertyToNode(property, "Icon");

    elements.push(
      <ActionBtn
        classname={property + "Count"}
        count={props.newActions[property]}
        dropdown={dropdownComponent}
        icon={iconComponent}
      />
    );
  }
  return <div className={styles.newActionsGroup}>{elements}</div>;
};

export default ActionBtnsArea;
