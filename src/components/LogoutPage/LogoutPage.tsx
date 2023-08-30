import React, { useContext } from "react";
import styles from "./LogoutPage.module.css";
import classnames from "classnames";
import { NavLink, Navigate } from "react-router-dom";
import LocationContext, {
  LocationContextType,
} from "../../utils/context/LocationProvider";

interface Props {
  isAuth: boolean;
  logout: () => void;
}

const LogoutPage: React.FC<Props> = (props) => {
  const { location } = useContext(LocationContext) as LocationContextType;

  return props.isAuth ? (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Would you like to logout?</h1>
      <div className={styles.answerArea}>
        <NavLink
          className={classnames(styles.button, styles.yesBtn)}
          onMouseDown={() => props.logout()}
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
