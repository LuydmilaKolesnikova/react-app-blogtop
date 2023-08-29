import React from "react";
import styles from "./LoginLink.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LocationContext, {
  LocationContextType,
} from "../../../utils/context/LocationProvider";
import { useContext } from "react";

const LoginLink = () => {
  const { setLocation } = useContext(LocationContext) as LocationContextType;
  const loc = useLocation();
  return (
    <div className={styles.loginLink}>
      <NavLink to="login" onMouseDown={() => setLocation(loc.pathname)}>
        Login
      </NavLink>
    </div>
  );
};

export default LoginLink;
