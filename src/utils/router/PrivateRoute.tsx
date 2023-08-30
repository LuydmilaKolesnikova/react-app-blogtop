import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LocationContext, {
  LocationContextType,
} from "../context/LocationProvider";
import { useContext } from "react";

interface Props {
  isAuth: boolean;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const { setLocation } = useContext(LocationContext) as LocationContextType;
  const loc = useLocation();
  setLocation(loc.pathname);

  return props.isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
