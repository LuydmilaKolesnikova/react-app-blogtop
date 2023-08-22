import React from "react";
import styles from "./PostProgress.module.css";

interface Props {
  category: string;
  procent: string;
  classname: string;
}

const PostProgressItem: React.FC<Props> = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemCategory}>{props.category}</div>
      <svg width="100%" height="20" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="0"
          y="0"
          width="100%"
          height="20"
          rx="10"
          ry="10"
          fill="#C9CBCC"
        />

        <rect
          className={`${styles[props.classname]}`}
          x="0"
          y="0"
          width={props.procent}
          height="20"
          rx="10"
          ry="10"
        />

        <text
          x="10"
          y="14"
          width="100"
          font-size="13px"
          font-weight="bold"
          fill="#fff"
        >
          {props.procent}
        </text>
      </svg>
    </div>
  );
};

export default PostProgressItem;
