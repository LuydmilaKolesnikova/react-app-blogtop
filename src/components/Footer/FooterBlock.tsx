import React from "react";
import styles from "./Footer.module.css";
import FooterBlockItem from "./FooterBlockItem";
import { FooterPostInitialState } from "../../redux/footer-reducer";

interface Props {
  title: string;
  posts: Array<FooterPostInitialState>;
}

const FooterBlock: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.block}`}>
      <h2 className={styles.title}>{props.title}</h2>
      {props.posts.map((post, index) => (
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
