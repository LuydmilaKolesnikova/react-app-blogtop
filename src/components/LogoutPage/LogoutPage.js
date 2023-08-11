import styles from "./LogoutPage.module.css";
import classnames from "classnames";
import { NavLink, Navigate } from "react-router-dom";
import LocationContext from "../../utils/context/LocationProvider";
import { useContext } from "react";

const LogoutPage = ({ logout, isAuth }) => {
  const { location, setLocation } = useContext(LocationContext);

  return isAuth ? (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Would you like to logout?</h1>
      <div className={styles.answerArea}>
        <NavLink
          className={classnames(styles.button, styles.yesBtn)}
          onMouseDown={() => logout()}
          to="/"
        >
          YES
        </NavLink>
        <NavLink
          className={classnames(styles.button, styles.noBtn)}
          to={location}
        >
          NO
        </NavLink>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default LogoutPage;
