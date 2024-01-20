import { useRef,useContext } from "react";
import { PostList } from "../store/post-list-store";


function Post() {
    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const userId = userIdElement.current.value;
      const postTitle = postTitleElement.current.value;
      const postBody = postBodyElement.current.value;
      const reactions = reactionsElement.current.value;
      const tags = tagsElement.current.value.split(" ");

      console.log(`${userId},${postTitle},${postBody},${tags}`)
      addPost(userId, postTitle, postBody, reactions, tags);
  
      userIdElement.current.value = "";
      postTitleElement.current.value = "";
      postBodyElement.current.value = "";
      reactionsElement.current.value = "";
      tagsElement.current.value = "";
  
      
    };
  
        return (
        <>
            <form onSubmit={handleSubmit}>
            <div className="kg-post">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">User ID</label>
                <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your user id" ref={userIdElement} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Blog topic</label>
                <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder=" Eg: (Artificial intelligence)" ref={postTitleElement} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Write a Post</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={postBodyElement}></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Hastags</label>
                <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="Put each hastag after a space" ref={tagsElement} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Reactions</label>
                <input type="Number" className="form-control" id="exampleFormControlInput1" placeholder="No. of people reacted to your post" ref={reactionsElement} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginLeft: "10px" }}>Post</button>
            </div>
            </form>
        </>
    )
}
export default Post;