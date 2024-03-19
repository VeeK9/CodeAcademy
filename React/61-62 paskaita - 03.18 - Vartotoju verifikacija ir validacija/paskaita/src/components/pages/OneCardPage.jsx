import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import CardsContext, {CardsActionTypes} from "../../contexts/CardsContext";
import Comment from "../UI/Comment";

const StyledSection = styled.section`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border: 1px solid lightgray;
    padding: 10px 20px;
    width: 50%;
    > h1, h3 {
      margin: 0;
    }
    > p {
      text-align: justify;
      margin: 0;
    }
    > button {
      width: fit-content;
    }
  }
  > div:first-child{
    width: 70%;
  }
`

const OneCardPage = () => {

  const { id } = useParams();
  const [card, setCard] = useState([]);
  const {loggedInUser} = useContext(UsersContext);
  const {setCards} = useContext(CardsContext);
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:8080/cards/${id}`)
      .then(res => res.json())
      .then(data => setCard(data))
  },[id])

  return (
    <StyledSection>
      <div>
        <h1>{card.title}</h1>
        <p>{card.description}</p>
        {
          card.userId === loggedInUser.id || loggedInUser.role === 'admin' ?
          <button
            onClick={() => {
              setCards({
                type: CardsActionTypes.delete,
                id: card.id
              })
              navigate(-1)
            }}
          >Delete
          </button> :
          null
        }
      </div>
      <article>
        {
          card.comments?.map(comment => 
            <Comment
              key={comment.id}
              comment={comment}
            />
          )
        }
      </article>
      {
        loggedInUser &&
        <form>
          <input type="text" />
        </form>
      }
    </StyledSection>
  );
}
 
export default OneCardPage;