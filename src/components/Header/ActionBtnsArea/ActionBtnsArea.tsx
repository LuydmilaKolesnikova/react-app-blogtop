import React, { useState } from "react";
import styles from "./ActionBtnsArea.module.css";
import { FollowfeedIcon } from "../../SVG-icons/SVG-icons";
import { MessagesIcon } from "../../SVG-icons/SVG-icons";
import { NotificationsIcon } from "../../SVG-icons/SVG-icons";
import ActionBtn from "./ActionBtn";
import FollowfeedDropdown from "./ActionDropdown/FollowfeedDropdown";
import MessagesDropdown from "./ActionDropdown/MessagesDropdown";
import NotificationsDropdown from "./ActionDropdown/NotificationsDropdown";
import { NewActionsState } from "../../../redux/header-reducer";

interface Props {
  newActions: NewActionsState;
}

const propertyToStringReactComponent = (
  property: string,
  definition: string
): string => {
  return (
    "<" +
    property.charAt(0).toUpperCase() +
    property.slice(1) +
    definition +
    " />"
  );
};

const ActionBtnsArea: React.FC<Props> = (props) => {
  const elements = [];

  for (let property in props.newActions) {
    let dropdownComponent = propertyToStringReactComponent(
      property,
      "Dropdown"
    );
    let iconComponent = propertyToStringReactComponent(property, "Icon");
    elements.push(
      <ActionBtn
        classname={property + "Count"}
        count={props.newActions[property]}
        dropdown={dropdownComponent as React.ReactNode}
        icon={iconComponent as React.ReactNode}
      />
    );
  }
  return <div className={styles.newActionsGroup}>{elements}</div>;
};

export default ActionBtnsArea;
