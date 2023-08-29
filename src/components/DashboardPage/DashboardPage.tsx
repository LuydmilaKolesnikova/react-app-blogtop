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
import { DashboardInitialState } from "../../redux/dashboard-reducer";

interface Props {
  dashboard: DashboardInitialState;
}

const DashboardPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.dashboardPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Your States</h1>
        <div className={styles.dashboards}>
          <PostViews postViews={props.dashboard.postViews} />
          <Upvotes upvotes={props.dashboard.upvotes} />
          <Comments comments={props.dashboard.comments} />
          <ProfileViews profileViews={props.dashboard.profileViews} />
          <PieChart pieChart={props.dashboard.pieChart} />
          <GraphChart graphChart={props.dashboard.graphChart} />
          <UserSignup userSignup={props.dashboard.userSignup} />
          <PostProgress postProgress={props.dashboard.postProgress} />
          <LineGraph lineGraph={props.dashboard.lineGraph} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
