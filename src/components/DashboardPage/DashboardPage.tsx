import React from "react";
import styles from "./DashboardPage.module.css";
import Comments from "./Comments/Comments.tsx";
import GraphChart from "./GraphChart/GraphChart.tsx";
import LineGraph from "./LineGraph/LineGraph.tsx";
import PieChart from "./PieChart/PieChart.tsx";
import PostProgress from "./PostProgress/PostProgress.tsx";
import PostViews from "./PostViews/PostViews.tsx";
import ProfileViews from "./ProfileViews/ProfileViews.tsx";
import Upvotes from "./Upvotes/Upvotes.tsx";
import UserSignup from "./UserSignup/UserSignup.tsx";

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
