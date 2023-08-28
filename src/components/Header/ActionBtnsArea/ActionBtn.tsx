import React, { useState } from "react";
import styles from "./ActionBtnsArea.module.css";

interface Props {
  count: number;
  classname: string;
  dropdown: React.ReactNode;
  icon: React.ReactNode;
}

const ActionBtn: React.FC<Props> = (props) => {
  let [dropdownVisible, setDropdownVisible] = useState(false);
  let [btnAreaHover, setBtnAreaHover] = useState(false);

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
        {props.icon}
        {props.count > 0 && (
          <div
            className={`${styles.newActionsCount} ${styles[props.classname]}`}
          >
            {props.count}
          </div>
        )}
      </button>
      {dropdownVisible && props.dropdown}
    </div>
  );
};

export default ActionBtn;
