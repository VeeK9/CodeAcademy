import { useContext } from "react";
import styled from "styled-components"
import CardsContext, {CardsActionTypes} from "../../contexts/CardsContext";
import UsersContext from "../../contexts/UsersContext";
import {Link} from "react-router-dom";

const StyledDiv = styled.div`
  padding: 10px 20px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  > h3 {
    margin: 0;
  }
  > p {
    text-align: justify;
    margin: 0;
  }
`

const Card = ({card, location}) => {

  const {setCards} = useContext(CardsContext);
  const {loggedInUser} = useContext(UsersContext);

  return (
    <StyledDiv>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <Link to={`/cards/${card.id}`}>More Info</Link>
      {
        card.userId === loggedInUser.id &&
        location !== "/cards/allCards" ||
        loggedInUser.role === "admin" ?
        <button
          onClick={() => {
            setCards({
              type: CardsActionTypes.delete,
              id: card.id
            })
          }}
        >Delete
        </button> :
        null
      }
    </StyledDiv>
  );
}
 
export default Card;