import React from "react";
import styles from "./MyPosts.module.css";
import { NavLink } from "react-router-dom";
import views from "../../../images/SVG-icons/views.svg";
import message from "../../../images/SVG-icons/message.svg";
import like from "../../../images/SVG-icons/like.svg";

const Post = ({
  photo,
  theme,
  title,
  beginningText,
  likesCount,
  messagesCount,
  viewsCount,
}) => {
  return (
    <div className={styles.post}>
      <NavLink className={styles.postInfo} 
        to="">
        <div className={styles.photoArea}>
          <img className={styles.photo} src={photo} alt="" />
          <p className={styles.theme}>{theme}</p>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.beginningText}>{beginningText}</div>
      </NavLink>
      <div className={styles.statistics}>
        <div className={styles.statisticsBlock}>
          <img src={views} alt="" />
          <span>{viewsCount}</span>
        </div>
        <div className={styles.statisticsBlock}>
          <img src={like} alt="" />
          <span>{likesCount}</span>
        </div>
        <NavLink
          to=""
          className={`${styles.statisticsBlock} ${styles.MessagesStatisticsBlock}`}
        >
          <img src={message} alt="" />
          <span>{messagesCount}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Post;
