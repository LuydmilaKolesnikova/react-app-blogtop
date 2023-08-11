import styles from "./PostProgress.module.css";
import commonStyles from "../DashboardPage.module.css";
import PostProgressItem from "./PostProgressItem";

const PostProgress = ({ postProgress }) => {
  return (
    <div className={`${styles.postProgress} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>PROGRESS FOR POST REACHES</h2>
      {postProgress && (
        <div className={styles.area}>
          {postProgress.posts.map((post, index) => {
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
