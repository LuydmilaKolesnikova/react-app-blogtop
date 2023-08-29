import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LocationContext, {
  LocationContextType,
} from "../context/LocationProvider";
import { useContext } from "react";

const PrivateRoute = ({ isAuth }) => {
  const { setLocation } = useContext(LocationContext) as LocationContextType;
  const loc = useLocation();
  setLocation(loc.pathname);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
