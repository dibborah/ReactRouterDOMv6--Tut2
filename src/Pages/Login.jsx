import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const {isLoggedIn, setIsLoggedIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.previousPath || "/";
  const login = () => {
    setIsLoggedIn(true);
    navigate(previousPath,{ replace:true });
    // console.log(previousPath);
  }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;
