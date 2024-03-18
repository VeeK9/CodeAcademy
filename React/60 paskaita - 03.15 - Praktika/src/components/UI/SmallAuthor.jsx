import { useContext } from "react";
import styled from "styled-components";
import PostContext from "../contexts/PostContext";

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0;
  }
  > img {
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 60%;
  }
`

const SmallAuthor = ({user}) => {

  const {posts} = useContext(PostContext);

  return (
    <StyledDiv>
      <h2>{user.username}</h2>
      <img src={user.avatar} alt={user.username} />
      <h2>{user.name}</h2>
      <p>Posts: {posts.filter(post => post.authorId === user.id).length}</p>
    </StyledDiv>
  );
}
 
export default SmallAuthor;