import React, { useState } from "react";
import styles from "./ActionBtnsArea.module.css";
import { FollowfeedIcon } from "../../SVG-icons/SVG-icons";
import { MessagesIcon } from "../../SVG-icons/SVG-icons";
import { NotificationsIcon } from "../../SVG-icons/SVG-icons";
import ActionBtn from "./ActionBtn";
import FollowfeedDropdown from "./ActionDropdown/FollowfeedDropdown";
import MessagesDropdown from "./ActionDropdown/MessagesDropdown";
import NotificationsDropdown from "./ActionDropdown/NotificationsDropdown";

const data = [
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

const ActionBtnsArea = ({ newActions }) => {
  const [btns] = useState(data);

  return (
    <div className={styles.newActionsGroup}>
      {btns.map((btn, index) => (
        <ActionBtn
          key={index}
          classname={btn.name + "Count"}
          dropdown={btn.dropdown}
          icon={btn.icon}
          count={newActions[btn.name]}
        />
      ))}
    </div>
  );
};

export default ActionBtnsArea;
