import React, { useState } from "react";
import styles from "./ActionBtnsArea.module.css";
import { JsxAttribute } from "typescript";

interface Props {
  count: number;
  classname: string;
}

//const ActionBtn = ({ classname, dropdown, icon, count }) => {
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
        {/* {icon} */}
        {/* {count > 0 &&
         <div className={`${styles.newActionsCount} ${styles[classname]}`}>
            {count}
          </div> 
          } */}
      </button>
      {/* {dropdownVisible && dropdown} */}
    </div>
  );
};

export default ActionBtn;
