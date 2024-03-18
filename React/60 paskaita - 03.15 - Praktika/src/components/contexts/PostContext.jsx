import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import UserContext from "./UserContext";

const PostContext = createContext();

const PostContextProvider = ({children}) => {

  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const {loggedInUser} = useContext(UserContext);

  const addNewPost = newPost => {
    setPosts([newPost, ...posts]);
    fetch(`http://localhost:8080/posts`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newPost)
    });
  };

  useEffect(()=>{
    fetch(`http://localhost:8080/posts`)
      .then(res => res.json())
      .then(data => setPosts(data.toReversed()))
  },[])

  useEffect(()=>{
    fetch(`http://localhost:8080/posts`)
      .then(res => res.json())
      .then(data => setUserPosts(data.filter(post => post.authorId === loggedInUser.id).toReversed()))
  },[loggedInUser, posts])

  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost,
        userPosts
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
 
export {PostContextProvider};
export default PostContext;