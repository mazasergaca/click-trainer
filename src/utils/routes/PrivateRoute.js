import { useSelector } from "react-redux";
import userSelectors from "../../redux/user/user-selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, redirectTo = "/" }) {
  const token = useSelector(userSelectors.getToken);

  return token ? children : <Navigate to={redirectTo} />;
}
