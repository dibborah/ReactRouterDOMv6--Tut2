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
import AuthProvider from "./context/AuthProvider";
import { Loader as fetchPosts } from "./Pages/Posts";
import { Loader as fetchSinglePost } from "./Pages/PostDetail";

// step 2:
// create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<h1>Something went wrong Bilal!!!</h1>}>
      <Route index element={<Home />} />
      {/* Ye home index hain mera */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        loader={fetchPosts}
        errorElement={<Error/>}
        path="posts"
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route
        loader={fetchSinglePost}
        path="posts/:id"
        element={
          <RequireAuth>
            <PostDetail />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
