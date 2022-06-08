import { useSelector } from "react-redux";
import userSelectors from "../../redux/user/user-selectors";
import { Navigate } from "react-router-dom";

export default function PublicRoute({
  children,
  restricted,
  redirectTo = "/",
}) {
  const token = useSelector(userSelectors.getToken);

  return token && restricted ? <Navigate replace to={redirectTo} /> : children;
}
