import styles from "./PostProgress.module.css";

const PostProgressItem = ({ category, procent, classname }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemCategory}>{category}</div>
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
          className={`${styles[classname]}`}
          x="0"
          y="0"
          width={procent}
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
          {procent}
        </text>
      </svg>
    </div>
  );
};

export default PostProgressItem;
