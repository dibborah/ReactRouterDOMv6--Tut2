import { Outlet, NavLink, useNavigation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useAuth } from "../context/AuthProvider";

const RootLayout = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigation = useNavigation();
  // console.log(navigation);
  const state = navigation.state;
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          {/* <li>
            <NavLink 
            to={"/login"}
            >
              Login
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return isActive ? styles.activeNav : null;
              }}
            >
              Home
            </NavLink>
            {/* "to" prop is similar to "href" in the anchor tag */}
          </li>
          <li>
            <NavLink
              to={"about"}
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
            to={"posts"}>Posts</NavLink>
          </li>
          {!isLoggedIn ? (
            <li>
              <NavLink
                to={"login"}
                className={(obj) => {
                  return obj.isActive ? styles.activeNav : null;
                }}
              >
                Login
              </NavLink>
            </li>
          ) : (
            isLoggedIn && (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            )
          )}
        </ul>
      </nav>
      <hr />
      {/* <h1>Main Content</h1> */}
      {state === "idle"? <Outlet /> : <h1>Loading...</h1>}
       {/* <Outlet /> */}
      {/*Isse humm batate hain ki humare child kahape render hongge
      // Ye batana parta hain 
      OUTLET child route ke elements ko render karta hain*/}
    </div>
  );
};

export default RootLayout;
