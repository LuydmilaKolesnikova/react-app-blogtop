import React from "react";
import styles from "./Footer.module.css";
import FooterBlock from "./FooterBlock";
import { FooterInitialState } from "../../redux/footer-reducer";

interface Props {
  postsData: FooterInitialState;
}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoBlock}>
        {props.postsData.postsData.map((block, index: number) => (
          <FooterBlock key={index} title={block.title} posts={block.posts} />
        ))}
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyrightIcon}></p>
        <p className={styles.copyrightText}>
          2023 Blog-top. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
