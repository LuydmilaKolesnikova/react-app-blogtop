import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LocationContext from "../context/LocationProvider";
import { useContext } from "react";

const PrivateRoute = ({ isAuth }) => {
  const { location, setLocation } = useContext(LocationContext);
  const loc = useLocation();
  setLocation(loc.pathname);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
