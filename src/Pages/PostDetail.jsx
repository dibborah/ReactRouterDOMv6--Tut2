import { redirect, useLoaderData } from "react-router-dom";

// export const Loader = async (args) => {
export const Loader = async ({params},{isLoggedIn}) => { 
  const url = "https://jsonplaceholder.typicode.com/posts";
  // const id = args.params.id;
  const id = params.id;
  if (!isLoggedIn) {// redirect is a function
    return redirect("/login");// Redirect is not a hook like useNavigate // It is a function
  }
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
  // console.log(args); 
  // return null;  
}

const PostDetail = () => {
  const post = useLoaderData();
  return (
    <div>
      {post && (
        <>
          <h2> title : {post?.title} </h2>
          <p> body: {post?.body} </p>
        </>
      )}
    </div>
  );
};

export default PostDetail;
