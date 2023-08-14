import React from "react";
import styles from "./Footer.module.css";
import FooterBlockItem from "./FooterBlockItem";

const FooterBlock = ({ title, data }) => {
  return (
    <div className={`${styles.block}`}>
      <h2 className={styles.title}>{title}</h2>
      {data.map((post, index) => (
        <FooterBlockItem
          key={index}
          avatar={post.avatar}
          postName={post.postName}
          time={post.time}
        />
      ))}
    </div>
  );
};

export default FooterBlock;
