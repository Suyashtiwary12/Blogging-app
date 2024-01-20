import { useContext } from "react";
import Blog from "./blog";
import { PostList} from "../store/post-list-store";

const Createblog = () => {
  const { postList } = useContext(PostList);
  return (
    <>
      {postList.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </>
  );
};

export default Createblog;