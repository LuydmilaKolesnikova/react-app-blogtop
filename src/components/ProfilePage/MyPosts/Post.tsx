import React from "react";
import styles from "./MyPosts.module.css";
import { NavLink } from "react-router-dom";
import views from "../../../images/SVG-icons/views.svg";
import message from "../../../images/SVG-icons/message.svg";
import like from "../../../images/SVG-icons/like.svg";

interface Props {
  title: string;
  photo: string;
  theme: string;
  beginningText: string;
  likesCount: number;
  messagesCount: number;
  viewsCount: number;
}

const Post: React.FC<Props> = (props) => {
  return (
    <div className={styles.post}>
      <NavLink className={styles.postInfo} to="">
        <div className={styles.photoArea}>
          <img className={styles.photo} src={props.photo} alt="" />
          <p className={styles.theme}>{props.theme}</p>
        </div>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.beginningText}>{props.beginningText}</div>
      </NavLink>
      <div className={styles.statistics}>
        <div className={styles.statisticsBlock}>
          <img src={views} alt="" />
          <span>{props.viewsCount}</span>
        </div>
        <div className={styles.statisticsBlock}>
          <img src={like} alt="" />
          <span>{props.likesCount}</span>
        </div>
        <NavLink
          to=""
          className={`${styles.statisticsBlock} ${styles.MessagesStatisticsBlock}`}
        >
          <img src={message} alt="" />
          <span>{props.messagesCount}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Post;
