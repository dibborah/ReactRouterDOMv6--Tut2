import { useLoaderData } from "react-router-dom";

// export const Loader = async (args) => {
export const Loader = async ({params}) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  // const id = args.params.id;
  const id = params.id;
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
