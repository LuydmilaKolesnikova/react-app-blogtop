import styles from "./PostViews.module.css";
import commonStyles from "../DashboardPage.module.css";

const PostViews = ({ postViews }) => {
  return (
    <div className={`${styles.postViews} ${commonStyles.block}`}>
      <h2 className={commonStyles.caption}>POST VIEWS</h2>
      {postViews && (
        <>
          <div className={commonStyles.number}>{postViews.number}</div>
          <div className={`${commonStyles.procent} ${styles.procent}`}>
            {postViews.procent}%
          </div>
        </>
      )}
    </div>
  );
};

export default PostViews;
