import styled from "styled-components";
import SmallPost from "../UI/SmallPost";
import { useContext } from "react";
import PostContext from "../contexts/PostContext";

const StyledArticle = styled.article`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const UserPosts = () => {

  const {userPosts} = useContext(PostContext);

  return (
    <StyledArticle>
      {
        userPosts.length > 0 ? userPosts.map(post =>
          <SmallPost 
            key={post.id}
            post={post}
          />
        ) :
        <h3>You haven't posted anything just yet.</h3>
      }
    </StyledArticle>
  );
}
 
export default UserPosts;