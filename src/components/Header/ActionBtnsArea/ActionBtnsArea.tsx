import React, { useState } from "react";
import styles from "./ActionBtnsArea.module.css";
import ActionBtn from "./ActionBtn";
import { FollowfeedIcon } from "../../SVG-icons/SVG-icons";
import { MessagesIcon } from "../../SVG-icons/SVG-icons";
import { NotificationsIcon } from "../../SVG-icons/SVG-icons";
import FollowfeedDropdown from "./ActionDropdown/FollowfeedDropdown";
import MessagesDropdown from "./ActionDropdown/MessagesDropdown";
import NotificationsDropdown from "./ActionDropdown/NotificationsDropdown";
import { NewActionsState } from "../../../redux/header-reducer";

interface Props {
  newActions: NewActionsState;
}

const propertyToNode = (
  property: string,
  definition: string
): React.ReactNode => {
  let nodeAsString: string =
    "<" +
    property.charAt(0).toUpperCase() +
    property.slice(1) +
    definition +
    " />";
  let node: React.ReactNode = nodeAsString as React.ReactNode;
  return node;
};

const ActionBtnsArea: React.FC<Props> = (props) => {
  const elements = [];

  for (let property in props.newActions) {
    let dropdownComponent = propertyToNode(property, "Dropdown");
    let iconComponent = propertyToNode(property, "Icon");
    console.log(dropdownComponent);
    console.log(iconComponent);
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
