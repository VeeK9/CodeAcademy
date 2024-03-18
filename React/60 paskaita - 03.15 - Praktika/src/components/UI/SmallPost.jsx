import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid lightgray;
  display: grid;
  grid-template-columns: ${props => props.$image ? '1fr 1fr 1fr' : '2fr 1fr'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 10px 30px;
  box-sizing: border-box;
  > h3 {
    justify-self: flex-start;
  }
  > img {
    height: 130px;
    aspect-ratio: 3 / 1;
    object-fit: cover;
    border: 1px solid lightgray;
    border-radius: 10px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    > p {
      margin: 0;
      > span {
        text-decoration: underline;
        font-weight: 700;
      }
    }
  }
`

const SmallPost = ({post}) => {

  const {users} = useContext(UserContext);

  return (
    <StyledDiv $image={post.image}>
      <h3>{post.title}</h3>
      {
        post.image && <img src={post.image} alt="" />
      }
      <div>
        <p>by: <span>{users.find(user => user.id === post.authorId).name}</span></p>
        <p>{post.timestamp}</p>
      </div>
    </StyledDiv>
  );
}
 
export default SmallPost;