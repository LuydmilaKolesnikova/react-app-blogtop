import React from "react";
import styles from "./DashboardPage.module.css";
import Comments from "./Comments/Comments";
import GraphChart from "./GraphChart/GraphChart";
import LineGraph from "./LineGraph/LineGraph";
import PieChart from "./PieChart/PieChart";
import PostProgress from "./PostProgress/PostProgress";
import PostViews from "./PostViews/PostViews";
import ProfileViews from "./ProfileViews/ProfileViews";
import Upvotes from "./Upvotes/Upvotes";
import UserSignup from "./UserSignup/UserSignup";

const DashboardPage = ({ dashboard }) => {
  //debugger;
  return (
    <div className={styles.dashboardPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your States</h1>
        <div className={styles.dashboards}>
          <PostViews postViews={dashboard.postViews} />
          <Upvotes upvotes={dashboard.upvotes} />
          <Comments comments={dashboard.comments} />
          <ProfileViews profileViews={dashboard.profileViews} />
          <PieChart pieChart={dashboard.pieChart} />
          <GraphChart graphChart={dashboard.graphChart} />
          <UserSignup userSignup={dashboard.userSignup} />
          <PostProgress postProgress={dashboard.postProgress} />
          <LineGraph lineGraph={dashboard.lineGraph} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
