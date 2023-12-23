import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
// import { useNavigate, useLocation } from "react-router-dom";
import { useNavigate,useSearchParams } from "react-router-dom";

const Login = () => {
  const {isLoggedIn, setIsLoggedIn} = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  // const url = location.search;
  // const searchParams = new URLSearchParams(url);
  // console.log(searchParams.get("redirectTo"));

  // const [searchParams,setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("a"));
  // console.log(searchParams.get("b"));
  // console.log(searchParams.get("c"));
  // console.log(searchParams.get("redirectTo"));

  // const previousPath = location.state?.previousPath || "/";
  const previousPath = searchParams.get("redirectTo") || "/";
  // console.log(previousPath);
  useEffect(()=>{
    if (isLoggedIn) {
      console.log(previousPath);
      navigate(previousPath,{ replace:true });           
    }
  },[isLoggedIn]);
  const login = () => {
    setIsLoggedIn(true);
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
