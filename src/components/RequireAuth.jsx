import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isLoggedIn, setIsloggedIn } = useAuth();
  // const loggedIn = true;
  const location = useLocation();
  // console.log(location);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={"/login"} replace={true} state={{
    previousPath:location.pathname
  }}/>;
};

export default RequireAuth;
