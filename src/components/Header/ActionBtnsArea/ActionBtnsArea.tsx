import React, { useState } from "react";
import styles from "./ActionBtnsArea.module.css";
import { FollowfeedIcon } from "../../SVG-icons/SVG-icons.tsx";
import { MessagesIcon } from "../../SVG-icons/SVG-icons.tsx";
import { NotificationsIcon } from "../../SVG-icons/SVG-icons.tsx";
import ActionBtn from "./ActionBtn.tsx";
import FollowfeedDropdown from "./ActionDropdown/FollowfeedDropdown.tsx";
import MessagesDropdown from "./ActionDropdown/MessagesDropdown.tsx";
import NotificationsDropdown from "./ActionDropdown/NotificationsDropdown.tsx";

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
