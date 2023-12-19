import { Link } from "react-router-dom";

const Post = ({ title, id, userId }) => {

  // Ye endpoint match hone par pura ka pura full post ek naye page main open hone ki functionality bohot important hain
  // B/c aisa hoga bohot bar ki jab hum data fetch karenge to data ek bohot bara list main ayega and us list main humme jo data chahiye wo bohot kam
  /// dya jaega kiuki sab eksath dena feasible nhi hain
  // And hum jab us data main click karenge to h wo data pura ka pura open ho jaega

  return (
    <div
      style={{ padding: "1rem", margin: "1rem", border: "2px solid #232323" }}
    >
      <Link to={id.toString()}> {/* Relative path */}
      {/* <Link to={`${id}`}> */} {/* Relative path */}
      {/* <Link to={`/posts/${id}`}> Absolute path */}
        <h2>title: {title}</h2>
      </Link>
      <p>id: {id}</p>
    </div>
  );
};

export default Post;
