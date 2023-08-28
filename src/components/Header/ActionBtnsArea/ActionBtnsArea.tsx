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

const ActionBtnsArea: React.FC<Props> = (props) => {
  return (
    <div className={styles.newActionsGroup}>
      for (let property in props.newActions)
      {
        <ActionBtn
          count={props.newActions[property as keyof NewActionsState]}
        />
      }
    </div>
  );
};

export default ActionBtnsArea;

//const [btns] = useState(data);

/* {btns.map((btn, index) => (
  <ActionBtn
    key={index}
    classname={btn.name + "Count"}
    dropdown={btn.dropdown}
    icon={btn.icon}
    count={newActions[btn.name]}
  />
))} */

/* const data = [
  {
    icon: <FollowfeedIcon />,
    dropdown: <FollowfeedDropdown />,
    classname: "followfeedCount",
    name: "followfeed",
  },
  {
    icon: <MessagesIcon />,
    dropdown: <MessagesDropdown />,
    classname: "messagesCount",
    name: "messages",
  },
  {
    icon: <NotificationsIcon />,
    dropdown: <NotificationsDropdown />,
    classname: "notificationsCount",
    name: "notifications",
  },
];
 */

/* {typeof props.newActions[property] === "number" && (
        <ActionBtn count={props.newActions[property] as number} />
      )} */

/* const elements = [];
  for (let property in props.newActions) {
    elements.push(
      <ActionBtn
        classname={props.newActions[property] + "Count"}
        count={props.newActions[property]}
        dropdown={<MessagesDropdown />}
      />
    );
  }
  return <div className={styles.newActionsGroup}>{elements}</div>; */
