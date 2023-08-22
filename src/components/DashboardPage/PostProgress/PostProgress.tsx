import React from "react";
import styles from "./PostProgress.module.css";
import commonStyles from "../DashboardPage.module.css";
import PostProgressItem from "./PostProgressItem";
import { PostProgressState } from "../../../redux/dashboard-reducer";

interface Props {
  postProgress: PostProgressState;
}

const PostProgress: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.postProgress} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>PROGRESS FOR POST REACHES</h2>
      {props && (
        <div className={styles.area}>
          {props.postProgress.posts.map((post, index: number) => {
            let classname = "item" + post.classname;
            return (
              <PostProgressItem
                key={index}
                category={post.category}
                procent={post.procent}
                classname={classname}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostProgress;
