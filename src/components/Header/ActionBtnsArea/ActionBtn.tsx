import React, { useState } from "react";
import styles from "./ActionBtnsArea.module.css";
import { FollowfeedIcon } from "../../SVG-icons/SVG-icons";
import { MessagesIcon } from "../../SVG-icons/SVG-icons";
import { NotificationsIcon } from "../../SVG-icons/SVG-icons";
import FollowfeedDropdown from "./ActionDropdown/FollowfeedDropdown";
import MessagesDropdown from "./ActionDropdown/MessagesDropdown";
import NotificationsDropdown from "./ActionDropdown/NotificationsDropdown";

interface Props {
  count: number;
  classname: string;
  dropdown: string;
  icon: string;
}

interface componentsState {
  [key: string]: React.FC;
}

const components: componentsState = {
  followfeedIcon: FollowfeedIcon,
  messagesIcon: MessagesIcon,
  notificationsIcon: NotificationsIcon,
  followfeedDropdown: FollowfeedDropdown,
  messagesDropdown: MessagesDropdown,
  notificationsDropdown: NotificationsDropdown,
};

function DynamicComponent(key: string): React.ReactNode {
  const Component = components[key];
  return <Component />;
}

const ActionBtn: React.FC<Props> = (props) => {
  let [dropdownVisible, setDropdownVisible] = useState(false);
  let [btnAreaHover, setBtnAreaHover] = useState(false);

  const iconComponent = DynamicComponent(props.icon);
  const dropdownComponent = DynamicComponent(props.dropdown);
  return (
    <div
      className={
        btnAreaHover
          ? `${styles.newActionsBtnArea} ${styles.newActionsBtnAreaHover}`
          : styles.newActionsBtnArea
      }
      onMouseOver={() => {
        setDropdownVisible(true);
        setBtnAreaHover(true);
      }}
      onMouseOut={() => {
        setDropdownVisible(false);
        setBtnAreaHover(false);
      }}
    >
      <button className={styles.newActionsBtn}>
        {iconComponent}
        {props.count > 0 && (
          <div
            className={`${styles.newActionsCount} ${styles[props.classname]}`}
          >
            {props.count}
          </div>
        )}
      </button>
      {dropdownVisible && dropdownComponent}
    </div>
  );
};

export default ActionBtn;
