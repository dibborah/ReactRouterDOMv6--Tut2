// step 1:
// import 4 things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, About, Contact, Posts, Error, PostDetail, Login } from "./Pages";
import RootLayout from "./layouts/RootLayout";
import RequireAuth from "./components/RequireAuth";
import { Loader as fetchPosts } from "./Pages/Posts";
import { Loader as fetchSinglePost } from "./Pages/PostDetail";
import { useAuth } from "./context/AuthProvider";

// step 2:
// create router

const App = () => {
  const {isLoggedIn} = useAuth();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<h1>Something went wrong Bilal!!!</h1>}>
      <Route index element={<Home />} />
      {/* Ye home index hain mera */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        loader={(args)=>{
          return fetchPosts(args,{isLoggedIn:isLoggedIn})}
        }
        errorElement={<Error/>}
        path="posts"
        element={
            <Posts />
        }
      />
      <Route path="login" element={<Login />} />
      <Route
        loader={(args)=>{
          return fetchSinglePost(args,{isLoggedIn:isLoggedIn})}
        }
        errorElement={<Error/>}
        path="posts/:id"
        element={
            <PostDetail />
        }
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
