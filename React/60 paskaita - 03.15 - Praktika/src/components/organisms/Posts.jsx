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

const Posts = () => {

  const {posts} = useContext(PostContext);

  return (
    <StyledArticle>
      {
        posts && posts.map(post =>
          <SmallPost 
            key={post.id}
            post={post}
          />
        )
      }
    </StyledArticle>
  );
}
 
export default Posts;