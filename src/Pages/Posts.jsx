import Post from "../components/post";
import { useLoaderData } from "react-router-dom";

// Component mount --> data fetch

// loaders

// fetch --> mount component
// pre-fetching data
// loaders use karne se pre-fetching hoti hain data
// loaders bane h is tarah se hain
// => REQUIREAUTH component NETWORK CALLS ko protect nhi kar pa raha bas render ko protect kar pa raha hain
// PROBLEM => Ye magar ek Problem hain

// loader
// 1.provide loader function to route
// 2.useLoaderData function and get Data

export const Loader = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  if (!response.ok){
    throw new Error("Something went wrong Rupesh!!!");  
  }
  const data = await response.json();
  return data;
}

const Posts = () => {
  const posts = useLoaderData();
  
  return <>{posts && posts.map((post) =><Post key={post.id} {...post}/>)}</>;

};

export default Posts;
