import { useContext } from "react";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import CardsContext, {CardsActionTypes} from "../../contexts/CardsContext";

const StyledDiv = styled.div`
  padding: 10px 20px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: relative;
  > h4 {
    margin: 0;
    > span {
      text-decoration: underline;
    }
  }
  > p {
    text-align: justify;
    margin: 0;
  }
`

const Comment = ({comment, cardId}) => {

  const {users, loggedInUser} = useContext(UsersContext);
  const {setCards} = useContext(CardsContext);

  const author = users.find(user => user.id === comment.authorId);

  return (
    <StyledDiv>
      {
        users.length ?
        <>
          <h4>Comment by <span>{author.username}</span>:</h4>
          <p>{comment.text}</p>
          {
            loggedInUser.id === author.id &&
            <button
              className="deleteBtn"
              onClick={()=>setCards({
                type: CardsActionTypes.deleteComment,
                commentId: comment.id,
                cardId: cardId
              })}
            >Delete</button>
          }
        </> :
        null
      }
    </StyledDiv>
  );
}
 
export default Comment;